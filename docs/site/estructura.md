# Estructura del sitio (v1)

**Objetivo:** que el visitante pase a una conversación de WhatsApp con un asesor. País: Ecuador (sin ciudad específica). Moneda: USD. Idioma: español, `es_EC`.

**Alcance acordado:** Inicio, Seguros, Contacto. Nada más. Sin formulario, sin blog, sin "Nosotros" ni "Recursos".

**Forma:** una sola página (`/`) con tres secciones ancladas; la navegación son enlaces a anclas. Ver `docs/adr/0001-sitio-de-una-pagina.md`.

| Sección | Ancla | Contenido |
|---|---|---|
| Inicio | `#inicio` | Hero: titular (Cinzel), subtítulo, CTA primario «Escribir por WhatsApp», CTA secundario «Ver seguros». Marfil de fondo, logo maestro/isotipo |
| Seguros | `#seguros` | Grilla de 6 cards (ver `docs/content/catalogo.md`): ícono, título, descripción, botón que abre WhatsApp con mensaje prellenado del seguro. Cierre: «Una sola asesoría. Múltiples soluciones.» |
| Contacto | `#contacto` | WhatsApp (CTA primario), teléfono, Instagram y Facebook (`@segurosromaec`). Dirección, horario y mapa solo si el dueño los confirma |

**Header:** escritorio = logo horizontal + menú (Inicio · Seguros · Contacto) + CTA «Cotizar». Móvil = isotipo + menú compacto + CTA accesible.
**Footer:** lockup horizontal, contacto, © año.

## Datos de contacto
Viven en `src/data/site.json` (ver `docs/deploy.md` para el estado). WhatsApp en formato `wa.me/593…` (Ecuador).

## Eventos GA4 (ya en `public/scripts/tracking.js`)
`click_whatsapp`, `click_telefono`, `click_maps`; los de `/productos` y `/contacto` se reemplazan por eventos de ancla (`click_ver_seguros`, `click_contacto`) al migrar a una página.

## Fuera de alcance v1
Formulario o cotizador, páginas por seguro, blog, precios, chat embebido.
