# Seguros Roma

Sitio web estático, mobile-first, para **Seguros Roma** (Ecuador, moneda USD): presenta el catálogo de seguros y lleva al visitante a una conversación de WhatsApp, y mide el tráfico con GA4. Es un proyecto hermano de `naru-site` (misma pila tecnológica), pero **independiente**: repositorio, cuenta de GitHub y cuenta de despliegue propios.

**Estado:** entrega por etapas. **Etapa 1 (rama `feat/presentacion-inicio`):** solo la presentación del Inicio (header, hero, footer). **Etapa 2 (`feat/sitio-completo`):** catálogo de 6 seguros y contacto. Sin GA4, Netlify ni dominio todavía (ver `docs/deploy.md`). **Objetivo de negocio:** convertir visitas en conversaciones de WhatsApp. Sin formulario, sin precios, sin blog. Detalle en `docs/site/estructura.md` y `docs/adr/0001-sitio-de-una-pagina.md`.

> Estándares: kit central en `~/.claude/kit` (contrato: `PROJECT-CONTRACT.md`). Aquí solo lo propio de Seguros Roma; la técnica genérica se referencia, no se copia.

## Stack
- Astro (HTML estático, islas solo donde haga falta), TypeScript `strict`, CSS con tokens de marca (`src/styles/tokens.css`, ver `docs/brand/BRAND.md`), fuentes Cinzel y Montserrat autohospedadas (`@fontsource`, OFL). Tests con Vitest.
- Datos: `src/data/site.json` (contacto) y `src/data/productos.json` (catálogo de 6 seguros, validado al construir).
- Hosting: Netlify (build automático al integrar en `main`). Analítica: GA4 opcional por `PUBLIC_GA_MEASUREMENT_ID`.
- **Cuentas (distintas de Naru):** GitHub, Netlify, GA4 y dominio **pendientes** (ver `docs/deploy.md`).

## Arquitectura
Estilo: frontend-component

## Estándares del kit que aplica este proyecto
| Kit (`.claude/skills/…`) | Para qué |
|---|---|
| `stacks/astro/` (`index.md`, `best-practices.md`) | Estructura, islas, imágenes, datos, SEO/a11y |
| `architecture/frontend-component/rules.md` | Capas de UI (FE-01..08) |
| `quality/web-performance/` (`checklist.md`, `images.md`) | Core Web Vitals y presupuesto de imágenes |
| `quality/owasp-security/static-sites.md` | Seguridad de sitio estático (CSP, cabeceras, secretos) |
| `quality/web-analytics/ga4.md` | Auditoría de GA4 |
| `quality/tdd-workflow/static-sites.md` | Qué lleva TDD y qué compuertas aplican |
| `git-feature-flow` (skill) + `conventional-commit`, `pr-description` | Publicación |

## Skills del proyecto (propios)
| Ruta (`.claude/skills/projects/seguros-roma/…`) | Cuándo leerla |
|---|---|
| `brand-rules/SKILL.md` | Al tocar logo, colores, tipografía, botones, textos o imágenes (reglas inviolables del manual) |
| `catalog-rules/SKILL.md` | Al editar `productos.json`, las cards o los textos del catálogo |

## Documentación interna (`docs/`)
`brand/BRAND.md` (marca) y `brand/assets/` (logos) · `content/catalogo.md` · `site/estructura.md` · `deploy.md` (cuentas y contacto) · `security.md` (OWASP Top 10:2021 y qué no se sube a git) · `adr/`. El kick-off ya está extraído a `docs/` (`brand/manual-texto.md`, `content/catalogo-referencia.jpg`); `kick-off/` queda **solo en local, ignorado por git**.

## Comandos
```bash
npm install
npm run dev        # desarrollo
npm run build      # compuerta: debe pasar sin errores
npm run check      # tipos (astro check)
npm test           # Vitest: lógica pura de src/lib/
```
TDD solo para lógica pura en `src/lib/` (`contacto.ts`, `productos.ts`) y el esquema del catálogo; el resto, compuertas de `quality/tdd-workflow/static-sites.md`.

## Convenciones
- Idioma: contenido y mensajes al público en español; identificadores en inglés.
- Mobile-first (estilos base móvil, `min-width` para escalar). Colores y tipografías solo desde los tokens.
- CSP restrictiva en `netlify.toml`: cada servicio externo (GA4, fuentes, mapa) se agrega por dominio y explícitamente.
- Decisiones de diseño: `docs/adr/` (una por archivo).

## Deuda conocida / excepciones autorizadas
(ninguna)
