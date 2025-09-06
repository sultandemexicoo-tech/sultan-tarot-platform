export default function Page() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold">Escuela & Marketplace de Tarot</h1>
        <p className="mt-4 text-zinc-300">
          Aprende con programas profesionales, certifícate y activa tu perfil como lector para atender a consultantes de todo el mundo 24/7.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/escuela" className="btn">Ver cursos</a>
          <a href="/marketplace" className="btn">Reservar lectura</a>
          <a href="/club" className="btn" style={{background:'#D4AF37',color:'#0B0B0F',fontWeight:800}}>Unirme al Club</a>
        </div>
        <p className="mt-4 text-xs text-zinc-400">Este starter incluye Mercado Pago + Zoom (handlers de API) listos para conectar.</p>
      </div>
      <div className="card">
        <div className="text-sm text-zinc-300">Checklist de producción</div>
        <ul className="mt-2 space-y-1 text-sm text-zinc-200 list-disc ml-5">
          <li>Conecta claves de Mercado Pago y Zoom en <code>.env</code></li>
          <li>Configura webhooks en Mercado Pago → URL: <code>/api/payments/mp/webhook</code></li>
          <li>Sube a Vercel y apunta tu dominio</li>
          <li>Configura Postgres y Prisma (opcional en esta demo)</li>
        </ul>
      </div>
    </section>
  )
}
