import { describe, expect, it } from "vitest";
import { mensajeCotizacion, telHref, whatsappLink } from "./contacto";

describe("whatsappLink", () => {
	it("devuelve null cuando no hay número configurado", () => {
		expect(whatsappLink("", "Hola")).toBeNull();
	});

	it("arma el enlace wa.me con el mensaje codificado", () => {
		expect(whatsappLink("593980804692", "Hola, ¿qué tal?")).toBe(
			"https://wa.me/593980804692?text=Hola%2C%20%C2%BFqu%C3%A9%20tal%3F",
		);
	});

	it("ignora espacios, guiones y el signo + del número", () => {
		expect(whatsappLink("+593 98-080 4692", "Hola")).toBe("https://wa.me/593980804692?text=Hola");
	});

	it("devuelve null si el número no tiene dígitos", () => {
		expect(whatsappLink("abc", "Hola")).toBeNull();
	});
});

describe("mensajeCotizacion", () => {
	it("nombra el seguro de interés", () => {
		expect(mensajeCotizacion("Seguro Médico")).toBe("Hola, quisiera cotizar: Seguro Médico");
	});
});

describe("telHref", () => {
	it("devuelve null sin teléfono", () => {
		expect(telHref("")).toBeNull();
	});

	it("deja solo dígitos y el + inicial", () => {
		expect(telHref("+593 98 080 4692")).toBe("tel:+593980804692");
	});
});
