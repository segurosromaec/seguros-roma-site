/** Enlace de WhatsApp con mensaje prellenado; devuelve null si no hay número configurado. */
export function whatsappLink(numero: string, mensaje: string): string | null {
	if (!numero) return null;
	return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
