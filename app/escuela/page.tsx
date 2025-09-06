export default function EscuelaPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Programas disponibles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Curso Intensivo Nivel 1','Arcanos Mayores en Profundidad','Lecturas Profesionales & Ética'].map((t,i)=>(
          <div key={i} className="card">
            <div className="text-amber-300 text-sm font-semibold">Nivel {i===0?'Inicial':i===1?'Intermedio':'Avanzado'}</div>
            <div className="font-bold mt-1">{t}</div>
            <div className="text-sm text-zinc-300 mt-1">Inicio pronto • Clases en vivo + grabaciones</div>
            <a href="#" className="btn mt-4">Inscribirme</a>
          </div>
        ))}
      </div>
    </div>
  )
}
