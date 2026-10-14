# Seguros Roma

Sitio web estático (Astro) de **Seguros Roma**: presenta la marca y los seguros que ofrece, y lleva al visitante a una conversación de WhatsApp.

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # tipos (astro check)
npm test         # tests de lógica pura (Vitest)
npm run build    # genera dist/
```
Variables de entorno: copiar `.env.example` a `.env` (la analítica GA4 es opcional).

## Despliegue
- **Dónde:** Netlify, proyecto `seguros-roma-site` → https://seguros-roma-site.netlify.app
- **Cómo:** automático. Cada cambio que se integra en `main` de este repositorio dispara un build (`npm run build`) y publica `dist/`.
- **Flujo:** rama de feature → Pull Request → revisión y merge del dueño → Netlify publica.
- Detalle completo, estado actual y verificación en [`docs/deploy.md`](docs/deploy.md).

## Documentación
[`docs/`](docs/): marca, catálogo, estructura del sitio, seguridad y decisiones.
