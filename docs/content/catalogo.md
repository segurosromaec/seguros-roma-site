# Catálogo de seguros (v1)

Fuente: `catalogo-referencia.jpg` (900×1600, la imagen original enviada por WhatsApp). Los textos son los de la imagen; se pueden ajustar al tono del manual (sin promesas absolutas) con aprobación del dueño.

Cierre de la pieza: **«Una sola asesoría. Múltiples soluciones. Consulte la opción ideal para usted.»**

| # | `id` | Título | Descripción | Foto (en la imagen) | Ícono |
|---|---|---|---|---|---|
| 1 | `medico` | Seguro Médico | Protección para consultas, exámenes, hospitalización y tratamientos. | Doctora sonriendo | salud (cruz) |
| 2 | `vida` | Seguro de Vida | Respaldo económico para la familia ante imprevistos. | Familia abrazada | vida (adulto + niño) |
| 3 | `vida-ahorro` | Seguro de Vida + Ahorro | Protección y construcción de capital a futuro. | Monedas y planta | ahorro (gráfico creciente) |
| 4 | `vehicular` | Seguro Vehicular | Protección para su vehículo ante accidentes, daños y terceros. | SUV azul | vehículo |
| 5 | `ramos-generales` | Ramos Generales | Cobertura para patrimonio, negocios, bienes y hogar. | Casa moderna | casa |
| 6 | `riesgos-profesionales` | Seguros de Riesgos Profesionales | Protección para trabajadores y profesionales ante riesgos derivados de su actividad. | Doctora (equipo médico) | profesional |

## Imágenes sugeridas
Recortes de la referencia en `imagenes/<id>.jpg` (≈ 405×165 px). Traen el ícono dorado incrustado abajo a la izquierda, así que son **de referencia/provisionales**: sirven para el primer borrador, no para producción. Se reemplazan por fotos originales (la composición pide: doctora sonriendo, familia, monedas con planta, SUV azul, casa moderna, profesional de salud).

**En el sitio:** `src/assets/catalogo/<id>.jpg` son recortes de 280×160 sin la zona del ícono dorado (el sitio dibuja sus propios íconos SVG). Para reemplazarlos, basta sustituir el archivo con el mismo nombre.

## Pendientes
- **Fotos:** solo existen dentro de la imagen de WhatsApp. Para la v1 se usan los recortes de `imagenes/` (calidad limitada). Se reemplazan cuando haya originales. Las originales pesadas van a `raw-fotos/` (ignorado por git); al repo solo entran optimizadas.
- **Íconos:** hechos (SVG outline en `src/components/icons.ts`, estilo del manual).
- Estos son seguros, no tarifas: **no hay precios** en la v1. Si más adelante se muestran, la moneda es **USD**.
