# Seguros Roma

Sitio web estático, mobile-first, para **Seguros Roma**: presenta quiénes son, los seguros que ofrecen y cómo contactarlos (WhatsApp, teléfono, mapa), y mide el tráfico con GA4. Es un proyecto hermano de `naru-site` (misma pila tecnológica), pero **independiente**: repositorio, cuenta de GitHub y cuenta de despliegue propios.

**Estado:** andamiaje inicial (estructura, páginas con contenido por definir). **A dónde queremos llegar:** *(por confirmar con el dueño: objetivo principal del sitio, p. ej. captar cotizaciones por WhatsApp; alcance de la primera versión; si habrá cotizador o formulario en una fase posterior)*.

> Estándares: kit central en `~/.claude/kit` (contrato: `PROJECT-CONTRACT.md`). Aquí solo lo propio de Seguros Roma; la técnica genérica se referencia, no se copia.

## Stack
- Astro (HTML estático, islas solo donde haga falta), TypeScript `strict`, CSS con tokens (`src/styles/tokens.css`, hoy placeholders neutros).
- Datos: `src/data/site.json` (contacto) y `src/data/productos.json` (catálogo de seguros, hoy vacío).
- Hosting: Netlify (build automático al integrar en `main`). Analítica: GA4 opcional por `PUBLIC_GA_MEASUREMENT_ID`.
- **Cuentas (distintas de Naru):** GitHub: *(por definir)* · Netlify: *(por definir)* · GA4: *(por definir)*.

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
Ninguno todavía. Cuando se defina la marca y el catálogo se crearán (por ejemplo, reglas de marca y de catálogo) y se listarán aquí.

## Comandos
```bash
npm install
npm run dev        # desarrollo
npm run build      # compuerta: debe pasar sin errores
npm run check      # tipos (astro check)
```
TDD solo para lógica pura en `src/utils/` o `src/lib/` y esquemas de datos; el resto, compuertas de `quality/tdd-workflow/static-sites.md`.

## Convenciones
- Idioma: contenido y mensajes al público en español; identificadores en inglés.
- Mobile-first (estilos base móvil, `min-width` para escalar). Colores y tipografías solo desde los tokens.
- CSP restrictiva en `netlify.toml`: cada servicio externo (GA4, fuentes, mapa) se agrega por dominio y explícitamente.
- Decisiones de diseño: `docs/adr/` (una por archivo).

## Deuda conocida / excepciones autorizadas
(ninguna)
