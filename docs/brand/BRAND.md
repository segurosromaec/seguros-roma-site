# Marca digital — Seguros Roma

Resumen operativo del *Manual de Marca Digital V1.3* (texto íntegro en `manual-texto.md`; el docx original vive solo en local y no se versiona). Si algo aquí contradice el manual (`manual-texto.md` + `assets/ref-*.jpg`), **manda el manual**.

## Esencia
Sólida, cercana, premium y fácil de entender. Slogan: **«Protegemos lo que más importa»**.
Objetivo de negocio del sitio: **convertir visitas en conversaciones de WhatsApp**, no maximizar páginas vistas.

## Logo (regla de oro)
Nadie redibuja ni "recrea" el símbolo, sus proporciones o la tipografía del wordmark. Tres firmas, no hay cuarta:

| Firma | Archivo (`docs/brand/assets/`) | Dónde usarla |
|---|---|---|
| Maestro vertical | `logo-vertical-maestro.png` (1536×1024) | Hero grande, cierres, OG image. **No** en navbar, favicon ni avatares |
| Lockup horizontal | `logo-horizontal.png` (1900×620) | Header y footer en escritorio |
| Isotipo | `isotipo.png` (433×491) | Header móvil, favicon, íconos. Recomendado ≥ 48 px, mínimo 24 px |

- Si el horizontal pierde legibilidad, no se comprime: se usa el isotipo.
- Monocromos oficiales: negro sobre blanco y blanco sobre negro (conversión por máscara/alfa, sin tocar la geometría).
- Fondos permitidos: blanco, marfil, Azul Roma.
- **Pendiente:** los PNG son los incrustados en el docx (fondo blanco, resolución limitada). Se necesitan los originales (SVG o PNG con transparencia).

## Color
| Token | Hex | Proporción | Uso |
|---|---|---|---|
| Azul Roma | `#1A3E6E` | 55 % | Navegación, títulos, CTA principal |
| Marfil / Blanco | `#FEF4E6` / `#FFFFFF` | 30 % | Fondos y respiración |
| Dorado | `#D4AF37` | 10 % | **Solo acento** (jerarquía, detalles). Nunca fondo dominante ni botón principal |
| Burdeos | `#8F1F2F` | 3 % | Énfasis editorial / alertas selectivas |
| Gris Oxford | `#4A5157` | 2 % | Texto secundario |

Regla: dorado y burdeos no compiten con el azul. Contraste legible en móvil.

## Tipografía
- **Cinzel Bold** — H1 y frases de marca. No en párrafos largos, formularios ni navegación.
- **Montserrat** (400/500/600/700) — todo lo demás. Fallback: Arial / sans-serif.
- Ambas con licencia libre (SIL OFL): se **autohospedan** (sin Google Fonts, sin tocar la CSP).

| Nivel | Desktop | Mobile | Peso |
|---|---|---|---|
| H1 | 48–56 px | 36–42 px | Cinzel Bold |
| H2 | 32–40 px | 28–32 px | Montserrat 600 |
| H3 | 22–28 px | 20–24 px | Montserrat 600 |
| Body | 16–18 px | 16–18 px | Montserrat 400 |
| Small | 14 px | 14 px | Montserrat 400 |
| CTA | 15–16 px | 15–16 px | Montserrat 600 |

## Componentes UI
- Botones: alto mínimo 44 px, radio 12–18 px, **un CTA primario por módulo**. Primario: fondo Azul Roma, texto blanco. Secundario: contorno Azul Roma.
- Cards: fondo claro, borde sutil, ícono outline azul, título H3, una línea de descripción, un botón.
- Iconografía: outline, 20–24 px en UI, trazo ≈ 2 px, azul / blanco / dorado solo como énfasis.
- Header: escritorio = logo horizontal + menú corto + CTA visible; móvil = isotipo + menú compacto + CTA accesible.
- Formularios (si algún día hay): labels siempre visibles, error explicativo, móvil primero. **No hay formulario en la v1.**

## Voz y tono
Directa y comprensible; cercana sin perder autoridad; orientada a próximos pasos.
- **CTA preferidos:** Cotizar · Comparar opciones · Hablar con un asesor · Escribir por WhatsApp.
- **Evitar:** jerga sin explicar, promesas absolutas de cobertura o resultados, mensajes basados en miedo, lujo excesivo o lenguaje pretencioso.

## Imágenes
Fotografía humana, luminosa y cercana (ver sección 19 del manual). WebP/AVIF, `loading="lazy"` bajo el primer viewport, sin video pesado de fondo.

## Control de calidad antes de publicar
1. ¿Se usó un archivo oficial del logo/isotipo?
2. ¿El símbolo mantiene exactamente su geometría?
3. ¿Tipografía Cinzel / Montserrat?
4. ¿Colores dentro de la paleta?
5. ¿El contraste permite leer en móvil?
6. ¿Hay una sola acción principal?
7. ¿Se revisó en tamaño real?

## Referencias visuales
`docs/brand/assets/ref-*.jpg`: paleta, tipografía, iconografía, header/hero y componentes UI, extraídos del manual.

## Discrepancias detectadas en el manual
- La hoja de iconos tiene Vida, WhatsApp y Atención mal dibujados, y no cubre **Ahorro** ni **Riesgos profesionales** → se dibujarán 6 íconos SVG outline propios, en la línea del manual (el símbolo del logo no se toca).
- El manual muestra navegación "Seguros / Nosotros / Recursos" y un formulario; el alcance acordado para la v1 es Inicio / Seguros / Contacto, sin formulario (ver `docs/site/estructura.md`).
