# ADR 0001 — Sitio de una sola página con secciones ancladas

- **Estado:** Aceptada por defecto (el dueño pidió «Inicio, Seguros, Contacto»; no precisó si en páginas separadas). Revisable.
- **Fecha:** 2026-10-06

## Contexto
El andamiaje heredado de Naru tiene cuatro páginas (`index`, `nosotros`, `productos`, `contacto`). El alcance de la v1 es Inicio, catálogo de 6 seguros y contacto, con un único objetivo: llevar al visitante a WhatsApp.

## Decisión
Una sola página `/` con secciones `#inicio`, `#seguros`, `#contacto`. Se eliminan `nosotros.astro` y `productos.astro`; `contacto.astro` pasa a ser una sección.

## Consecuencias
- Menos navegación entre el interés y la acción (mejor conversión, más simple de mantener).
- Un solo HTML y un solo contexto de SEO; no hay URL por seguro (se pueden añadir después sin romper nada).
- Los eventos de GA4 por ruta (`/productos`, `/contacto`) se sustituyen por eventos de ancla.
- Si el dueño pide páginas separadas, cada sección ya es un componente reutilizable.
