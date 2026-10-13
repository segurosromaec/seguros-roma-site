# Seguros Roma

Sitio web estático (Astro) de Seguros Roma. Proyecto hermano de `naru-site`, con repositorio y cuentas propias.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run check    # tipos (astro check)
npm test         # tests de lógica pura (Vitest)
```

- Contexto, estándares y convenciones: [`CLAUDE.md`](CLAUDE.md).
- Variables de entorno: copiar `.env.example` a `.env` (la analítica es opcional).
- Despliegue: Netlify, con `netlify.toml` (cabeceras de seguridad y caché). Pendiente: conectar este repositorio a Netlify y definir el dominio (ver `docs/deploy.md`).
