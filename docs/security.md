# Seguridad — OWASP Top 10:2021 aplicado a este sitio

Guía base: `quality/owasp-security/static-sites.md` del kit (sitio estático sin backend propio). Auditoría previa a cada PR/release con el `security-agent` del kit. Esta tabla dice **qué aplica aquí** y **qué se hace**.

| OWASP 2021 | Aplica a Seguros Roma | Control |
|---|---|---|
| **A01 Broken Access Control** | Sin login ni backend. Riesgo en cuentas | 2FA en GitHub y Netlify; rama `main` protegida; tokens de alcance mínimo (acciones humanas, ver `deploy.md`) |
| **A02 Cryptographic Failures** | Transporte | HTTPS forzado y HSTS (ya en `netlify.toml`). Sin datos personales almacenados |
| **A03 Injection** | Sin formulario ni BD. Único vector: construir URLs | `whatsappLink` usa `encodeURIComponent`; Astro escapa por defecto; **prohibido** `set:html` / `innerHTML` con datos; única excepción: `Icon.astro` inyecta las constantes de `src/components/icons.ts` (código propio, nunca datos de usuario ni JSON) |
| **A04 Insecure Design** | Alcance | v1 sin formularios, sin pagos, sin cuentas. Si se añade formulario/cotizador → TDD + validación en servidor + anti-spam antes de publicar |
| **A05 Security Misconfiguration** | Cabeceras y CSP | CSP restrictiva (`default-src 'self'`), `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`. No debilitar; cada dominio externo se agrega explícito |
| **A06 Vulnerable Components** | npm (Astro, sharp) | `npm audit --audit-level=high` antes de cada PR; nunca `audit fix --force` automático; lockfile versionado |
| **A07 Identification & Auth Failures** | No hay autenticación | N/A en la v1 (2FA de cuentas cubre el resto) |
| **A08 Software & Data Integrity** | Scripts de terceros, supply chain | Solo scripts propios (`script-src 'self'`); GA4 se añade por dominio solo si se configura; fuentes autohospedadas (sin CDN); sin `<script src>` de CDN |
| **A09 Logging & Monitoring** | Mínimo | Registro de despliegues de Netlify; GA4 para anomalías de tráfico; revisar logs de build |
| **A10 SSRF** | Sin servidor | N/A (no hay funciones serverless en la v1) |

## Reglas concretas del proyecto
1. **Secretos:** ninguno en el repo. Solo `PUBLIC_GA_MEASUREMENT_ID` (público por diseño). `.env*` ignorado salvo `.env.example`.
2. **Qué NO se sube a git** (ver `.gitignore`): `kick-off/` (material fuente del cliente), `raw-fotos/` (originales pesados), `docs-internos/`, `.env*`, `node_modules/`, `dist/`, `.astro/`, `.claude/settings.local.json`. Antes de cada push: `git status` y revisar que solo entra lo aprobado.
3. **Marca:** al repo solo van activos oficiales de la marca (`docs/brand/assets/`, íconos y fotos optimizadas). No se versionan archivos fuente editables ni propuestas descartadas, ni el docx original.
4. **Datos públicos:** todo lo de `src/` y `public/` es público. Solo contacto del negocio (WhatsApp, redes). Sin datos personales de clientes, tarifas internas ni comisiones.
5. **Enlaces externos** (WhatsApp, Instagram, Facebook): `rel="noopener noreferrer"`; no requieren cambios de CSP porque son navegación, no embebidos.
6. **CSP al agregar servicios:** GA4 (`googletagmanager.com`, `google-analytics.com`), mapa (`frame-src https://www.google.com`). Nada más sin ADR.
7. **Privacidad (Ecuador, LOPDP):** si se activa GA4 (cookies/identificadores), evaluar aviso de privacidad/consentimiento. *Pregunta abierta para el dueño.*
8. **Verificación en producción:** cabeceras con securityheaders.com o `curl -I`, CSP sin errores en consola, enlace de WhatsApp correcto.

## Compuertas de seguridad por PR
- [ ] `npm audit --audit-level=high` sin hallazgos altos/críticos
- [ ] Escaneo de secretos (comando de `static-sites.md` §1) limpio
- [ ] `netlify.toml` conserva todas las cabeceras y CSP
- [ ] Sin `set:html`, `innerHTML` ni `eval` (salvo la excepción documentada de `Icon.astro`)
- [ ] Sin scripts o recursos de CDN no declarados
- [ ] `git status`: nada de `kick-off/`, `raw-fotos/` ni `.env` en staging
