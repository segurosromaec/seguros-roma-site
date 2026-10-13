---
name: seguros-roma-catalog-rules
description: Reglas del catálogo de seguros de Seguros Roma (6 productos, esquema de datos, textos, imágenes, enlace a WhatsApp). Úsalo al editar src/data/productos.json, las cards de seguros o los textos del catálogo.
---

# Reglas del catálogo — Seguros Roma

Contenido de referencia: `docs/content/catalogo.md`. Estructura del sitio: `docs/site/estructura.md`.

## Datos
- Fuente única: `src/data/productos.json`. Cada producto: `id` (slug único), `nombre`, `descripcion`, `imagen` (ruta existente), `icono` (nombre de SVG existente).
- Los 6 productos de la v1 y su orden están en `docs/content/catalogo.md`; el orden se conserva.
- **Esquema validado con TDD** (es lógica de datos según `quality/tdd-workflow/static-sites.md`): primero un test que falle con `id` repetido, campo vacío o imagen/ícono inexistente.

## Contenido
- Textos de la imagen del kick-off; cualquier ajuste se hace con tono del manual (ver `seguros-roma-brand-rules`) y lo aprueba el dueño.
- **Sin precios ni promesas absolutas** de cobertura. Si algún día hay precios: USD.
- Cada card tiene **un** botón: abre WhatsApp con mensaje prellenado que nombra el seguro (generado por `whatsappLink` en `src/utils/format.ts`).

## Imágenes
- Origen v1: recortes de `kick-off/WhatsApp Image …jpeg`. Originales pesadas en `raw-fotos/` (ignorado por git); al repo solo entran optimizadas (WebP, tamaño acorde a la card, ancho/alto declarados para evitar CLS).
- Se reemplazan por originales cuando existan, sin tocar el esquema.
