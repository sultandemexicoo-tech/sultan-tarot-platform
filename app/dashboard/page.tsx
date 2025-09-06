export default function DashboardPage(){
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card">
        <div className="font-bold">Reservas</div>
        <div className="text-sm text-zinc-400">Próximamente: listaremos tus reservas y enlaces de Zoom.</div>
      </div>
      <div className="card">
        <div className="font-bold">Membresía</div>
        <div className="text-sm text-zinc-400">Estado del Club y beneficios.</div>
      </div>
    </div>
  )
}
