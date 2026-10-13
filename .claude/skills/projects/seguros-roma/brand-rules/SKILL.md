---
name: seguros-roma-brand-rules
description: Reglas inviolables de marca de Seguros Roma (logo, paleta, tipografía, CTA, tono) y checklist previo a publicar. Úsalo al tocar estilos, tokens, logo, fuentes, textos, botones o imágenes del sitio.
---

# Reglas de marca — Seguros Roma

Referencia larga: `docs/brand/BRAND.md`. Fuente de verdad: el manual en `kick-off/`. Ante conflicto manda el manual.

## Inviolables
1. **Nunca redibujar ni recrear** el logo/isotipo ni cambiar su tipografía o proporciones. Solo archivos de `docs/brand/assets/` (o sus originales cuando lleguen). Escalar proporcionalmente.
2. Logo por contexto: vertical maestro = hero/cierres/OG; horizontal = header y footer en escritorio; **isotipo** = móvil, favicon, espacios chicos. El vertical nunca va en navbar ni favicon. Si el horizontal no se lee, se usa el isotipo; no se comprime.
3. Colores **solo desde `src/styles/tokens.css`**: Azul Roma `#1A3E6E`, Marfil `#FEF4E6`, Blanco, Dorado `#D4AF37`, Burdeos `#8F1F2F`, Oxford `#4A5157`. Proporción ≈ 55/30/10/3/2.
4. **Dorado = acento**, nunca fondo dominante ni botón principal. Burdeos = énfasis puntual.
5. Tipografía: **Cinzel Bold** solo H1 y frases de marca; **Montserrat** (400–700) para todo lo demás. Autohospedadas (SIL OFL), nunca desde un CDN de fuentes (la CSP no lo permite).
6. **Un solo CTA primario por módulo.** Botón: ≥ 44 px de alto, radio 12–18 px, primario Azul Roma/texto blanco, secundario con contorno azul.
7. CTA preferidos: *Cotizar · Comparar opciones · Hablar con un asesor · Escribir por WhatsApp*.
8. Tono: directo, cercano, con autoridad. **Prohibido:** promesas absolutas de cobertura/resultados, mensajes de miedo, jerga sin explicar, lujo pretencioso.
9. Íconos: outline, 20–24 px en UI, trazo ≈ 2 px, azul/blanco; dorado solo como énfasis.
10. Imágenes: WebP/AVIF, `loading="lazy"` bajo el primer viewport, sin video pesado de fondo. Con `alt` descriptivo.

## Checklist antes de dar por listo un cambio visual
- [ ] ¿Archivo oficial de logo, geometría intacta?
- [ ] ¿Cinzel/Montserrat y colores dentro de la paleta (vía tokens)?
- [ ] ¿Contraste legible en móvil (AA)?
- [ ] ¿Una sola acción principal por módulo?
- [ ] ¿Revisado en tamaño real (móvil y escritorio)?
- [ ] ¿Pasa `npm run check` y `npm run build`?

Complementa (no reemplaza) `quality/web-performance/checklist.md` y `quality/web-performance/images.md` del kit.
