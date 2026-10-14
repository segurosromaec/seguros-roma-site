# Despliegue y cuentas

## Resumen
| | |
|---|---|
| **Hosting** | Netlify |
| **Proyecto** | `seguros-roma-site` — panel: https://app.netlify.com/projects/seguros-roma-site/overview |
| **URL actual** | https://seguros-roma-site.netlify.app |
| **Repositorio** | https://github.com/segurosromaec/seguros-roma-site |
| **Rama de producción** | `main` |
| **Build** | `npm run build` (Astro) · **Publica:** `dist/` · **Node:** 22 (ver `netlify.toml`) |
| **Disparador** | Automático: cada integración en `main` |
| **Dominio propio** | Pendiente |
| **GA4** | Pendiente (`PUBLIC_GA_MEASUREMENT_ID`, opcional) |

La configuración de build, las cabeceras de seguridad y la caché viven en [`netlify.toml`](../netlify.toml), versionada en el repo; no depende de ajustes manuales en el panel de Netlify.

## Cómo se despliega
1. Se trabaja en una rama de feature (`feat/...`), nunca directo en `main`.
2. Se abre un Pull Request hacia `main`. Netlify genera un **Deploy Preview** del PR (URL temporal para revisar antes de publicar).
3. El dueño revisa y hace el **merge**.
4. Netlify detecta el cambio en `main`, ejecuta `npm run build` y publica `dist/`. Tarda un par de minutos.
5. Verificación: abrir la URL y revisar el log en Netlify → *Deploys*.

## Entrega por etapas
| Etapa | Rama | Qué publica | Estado |
|---|---|---|---|
| 1 | `feat/presentacion-inicio` | Solo la presentación del Inicio: header, hero y footer | **Publicada** (PR #1 integrado en `main`) |
| 2 | `feat/sitio-completo` | Catálogo de 6 seguros, sección de contacto y menú por anclas | Pendiente: se integra en `main` solo cuando el cliente confirme |

Hasta que se integre la etapa 2, el sitio público muestra únicamente la etapa 1.

## Estado actual (2026-10-13)
- **En producción:** https://seguros-roma-site.netlify.app responde 200 con la presentación del Inicio (etapa 1).
- Antes de integrar el PR #1, `main` solo tenía el `README.md` inicial de GitHub y la URL respondía **404 «Page not found»**, porque no había `index.html` que publicar.

## Seguridad del despliegue
- HTTPS forzado con HSTS; cabeceras y CSP restrictiva definidas en `netlify.toml` (ver `security.md`).
- Sin secretos en el repositorio. Las variables de entorno se cargan en Netlify → *Site configuration → Environment variables*; la única prevista es `PUBLIC_GA_MEASUREMENT_ID` (pública por diseño).
- Recomendado en GitHub: proteger `main` (*Require a pull request before merging*, *Do not allow force pushes*) y tener 2FA en las cuentas de GitHub y Netlify.

## Contacto del negocio
| Dato | Valor |
|---|---|
| WhatsApp / teléfono | `0980804692` → `+593 98 080 4692` (`wa.me/593980804692`) |
| Instagram | `@segurosromaec` → `instagram.com/segurosromaec` |
| Facebook | `@segurosromaec` → `facebook.com/segurosromaec` (verificar que la URL resuelva) |
| TikTok | No existe; no se enlaza |
| Dirección, horario, mapa | Sin definir; se omiten hasta confirmar |

## Pendientes
1. Integrar la etapa 2 en `main` cuando el cliente lo confirme y verificar con `curl -I https://seguros-roma-site.netlify.app`.
2. Dominio: configurarlo en Netlify, poner `site` en `astro.config.mjs` y revisar canonical y og.
3. GA4: crear la propiedad y cargar `PUBLIC_GA_MEASUREMENT_ID`; si se activa, evaluar aviso de privacidad (ley de datos personales de Ecuador).
4. Si se agrega un servicio externo (GA4, mapa), ajustar la CSP en `netlify.toml` solo por dominio.
