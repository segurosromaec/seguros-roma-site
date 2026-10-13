import { describe, expect, it } from "vitest";
import { assertProductos, validateProductos, type Producto } from "./productos";

const opciones = { iconos: ["medico", "vida"], imagenes: ["medico", "vida"] };

const valido = (over: Partial<Producto> = {}): Producto => ({
	id: "medico",
	nombre: "Seguro Médico",
	descripcion: "Protección para consultas.",
	imagen: "medico",
	icono: "medico",
	...over,
});

describe("validateProductos", () => {
	it("no reporta errores con datos válidos", () => {
		expect(validateProductos([valido(), valido({ id: "vida", imagen: "vida", icono: "vida" })], opciones)).toEqual([]);
	});

	it("reporta un catálogo vacío", () => {
		expect(validateProductos([], opciones)).toContain("El catálogo no tiene productos");
	});

	it("reporta ids repetidos", () => {
		const errores = validateProductos([valido(), valido()], opciones);
		expect(errores.some((e) => e.includes("id repetido: medico"))).toBe(true);
	});

	it("exige id en formato slug", () => {
		const errores = validateProductos([valido({ id: "Seguro Médico" })], opciones);
		expect(errores.some((e) => e.includes("id inválido"))).toBe(true);
	});

	it("exige nombre y descripción no vacíos", () => {
		const errores = validateProductos([valido({ nombre: " ", descripcion: "" })], opciones);
		expect(errores.some((e) => e.includes("nombre vacío"))).toBe(true);
		expect(errores.some((e) => e.includes("descripcion vacía"))).toBe(true);
	});

	it("reporta íconos e imágenes inexistentes", () => {
		const errores = validateProductos([valido({ icono: "nave", imagen: "fantasma" })], opciones);
		expect(errores.some((e) => e.includes('icono inexistente: "nave"'))).toBe(true);
		expect(errores.some((e) => e.includes('imagen inexistente: "fantasma"'))).toBe(true);
	});
});

describe("assertProductos", () => {
	it("lanza con todos los errores si hay alguno", () => {
		expect(() => assertProductos([valido({ nombre: "" })], opciones)).toThrow(/nombre vacío/);
	});

	it("devuelve los productos cuando son válidos", () => {
		const lista = [valido()];
		expect(assertProductos(lista, opciones)).toBe(lista);
	});
});
