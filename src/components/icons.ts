/** Íconos outline (viewBox 24, trazo 2 px) de la familia base del manual. Cada valor son elementos SVG. */
export const ICONOS = {
	medico: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
	vida: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14.2c2.5.3 4 2.4 4 5.8"/>',
	ahorro: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
	vehicular:
		'<path d="M4 13l1.6-5a1 1 0 0 1 1-.7h10.8a1 1 0 0 1 1 .7L20 13"/><path d="M3 13h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><circle cx="7.5" cy="18" r="1.7"/><circle cx="16.5" cy="18" r="1.7"/>',
	hogar: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
	profesional: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
	whatsapp:
		'<path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.2-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"/>',
	telefono: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
	instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/>',
	facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z"/>',
} as const;

export type NombreIcono = keyof typeof ICONOS;
