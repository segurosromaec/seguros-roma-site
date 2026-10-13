# Despliegue y cuentas

Proyecto independiente de Naru: repositorio, cuenta de deploy y analítica propios.

| Pieza | Estado | Dato |
|---|---|---|
| Repositorio GitHub | **Pendiente** (límite de peticiones en la cuenta de Google) | — |
| Netlify | **Pendiente** (depende de la cuenta) | Build: `npm run build`, publish: `dist` (ya en `netlify.toml`) |
| GA4 | **Pendiente** | `PUBLIC_GA_MEASUREMENT_ID` en variables de Netlify |
| Dominio | **Pendiente** | Al tenerlo: `site` en `astro.config.mjs` y revisar canonical/og |

## Contacto (recibido del dueño)
| Dato | Valor | Nota |
|---|---|---|
| WhatsApp / teléfono | `0980804692` → `+593 98 080 4692` (`wa.me/593980804692`) | **Confirmado** por el dueño: es el WhatsApp del negocio |
| Instagram | `@segurosromaec` → `instagram.com/segurosromaec` | Confirmado (mismo usuario que Facebook) |
| Facebook | `@segurosromaec` → `facebook.com/segurosromaec` | Confirmado; verificar que la URL resuelva antes de publicar |
| TikTok | — | No existe; no se enlaza |
| Dirección, horario, mapa | — | Sin definir; se omiten hasta confirmar |

## Checklist cuando haya cuentas
1. Crear repo vacío en GitHub, `git remote add origin`, push de la rama y PR (flujo `git-feature-flow`; el merge lo hace el dueño).
2. Netlify → importar el repo; revisar que tome `netlify.toml`.
3. Variables de entorno: `PUBLIC_GA_MEASUREMENT_ID` (opcional).
4. Dominio: DNS, `site` en `astro.config.mjs`, HTTPS verificado.
5. Ajustar la CSP en `netlify.toml` solo por dominio y solo si se agrega un servicio externo (GA4, mapa).
6. Probar en producción: enlace de WhatsApp, eventos GA4 en tiempo real, cabeceras de seguridad.
