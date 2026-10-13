/** Deja solo dígitos: "+593 98-080 4692" → "593980804692". */
const soloDigitos = (valor: string): string => valor.replace(/\D/g, "");

/** Enlace de WhatsApp con mensaje prellenado; null si no hay un número utilizable. */
export function whatsappLink(numero: string, mensaje: string): string | null {
	const digitos = soloDigitos(numero);
	if (!digitos) return null;
	return `https://wa.me/${digitos}?text=${encodeURIComponent(mensaje)}`;
}

/** Mensaje inicial al pedir cotización de un seguro concreto. */
export function mensajeCotizacion(nombreSeguro: string): string {
	return `Hola, quisiera cotizar: ${nombreSeguro}`;
}

/** Enlace `tel:` en formato internacional; null si no hay teléfono. */
export function telHref(telefono: string): string | null {
	const digitos = soloDigitos(telefono);
	if (!digitos) return null;
	return `tel:${telefono.trim().startsWith("+") ? "+" : ""}${digitos}`;
}
