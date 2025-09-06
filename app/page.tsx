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
          <a href="/club" className="btn" style={{background:'#D4AF37', color:'#0B0B0F', fontWeight:800}}>Unirme al Club</a>
        </div>
      </div>
      <div className="card">
        <div className="text-sm text-zinc-300">Demo lista para producción</div>
        <ul className="mt-2 space-y-1 text-sm text-zinc-200 list-disc ml-5">
          <li>Next.js 14 + Tailwind</li>
          <li>Rutas de API para Mercado Pago y Zoom</li>
          <li>Listo para conectar tu dominio</li>
        </ul>
      </div>
    </section>
  );
}
