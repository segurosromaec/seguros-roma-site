export interface Producto {
	id: string;
	nombre: string;
	descripcion: string;
	imagen: string;
	icono: string;
}

export interface OpcionesCatalogo {
	/** Nombres de ícono disponibles en el sitio. */
	iconos: string[];
	/** Nombres de imagen disponibles (sin extensión). */
	imagenes: string[];
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Devuelve la lista de problemas del catálogo; vacía si es válido. */
export function validateProductos(productos: Producto[], { iconos, imagenes }: OpcionesCatalogo): string[] {
	if (productos.length === 0) return ["El catálogo no tiene productos"];

	const errores: string[] = [];
	const vistos = new Set<string>();

	for (const p of productos) {
		const ref = p.id || "(sin id)";
		if (!SLUG.test(p.id)) errores.push(`${ref}: id inválido (use minúsculas, números y guiones)`);
		if (vistos.has(p.id)) errores.push(`${ref}: id repetido: ${p.id}`);
		vistos.add(p.id);
		if (!p.nombre.trim()) errores.push(`${ref}: nombre vacío`);
		if (!p.descripcion.trim()) errores.push(`${ref}: descripcion vacía`);
		if (!iconos.includes(p.icono)) errores.push(`${ref}: icono inexistente: "${p.icono}"`);
		if (!imagenes.includes(p.imagen)) errores.push(`${ref}: imagen inexistente: "${p.imagen}"`);
	}
	return errores;
}

/** Rompe el build con todos los errores a la vez si el catálogo es inválido. */
export function assertProductos(productos: Producto[], opciones: OpcionesCatalogo): Producto[] {
	const errores = validateProductos(productos, opciones);
	if (errores.length > 0) throw new Error(`Catálogo inválido:\n- ${errores.join("\n- ")}`);
	return productos;
}
