# Sultán de México — Escuela & Marketplace de Tarot (Starter)

Stack: Next.js 14 + Tailwind + (APIs) Mercado Pago & Zoom listas para conectar.

## Pasos rápidos

1. **Clona e instala**
```bash
pnpm i # o npm i / yarn
cp .env.example .env
```

2. **Configura credenciales**
- Mercado Pago: `MP_ACCESS_TOKEN`, `MP_PUBLIC_KEY`
- Zoom Server-to-Server OAuth: `ZOOM_ACCOUNT_ID`, `ZOOM_CLIENT_ID`, `ZOOM_CLIENT_SECRET`

3. **Dev**
```bash
pnpm dev
```

4. **Webhooks**
- Mercado Pago → URL: `/api/payments/mp/webhook`

> Este starter no persiste datos aún (Prisma incluido opcionalmente). Integra Postgres y las operaciones en webhook según tu lógica de negocio.
