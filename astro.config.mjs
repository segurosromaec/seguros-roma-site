// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: al conectar el dominio real en Netlify, poner aquí su URL (ej. "https://segurosroma.com").
	// Sin esto, <link rel="canonical"> y og:url/og:image usan localhost. Hay que setearlo
	// antes de compartir el link o generar un QR.
	// site: "https://tu-dominio.com",
});
