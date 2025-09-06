export default function ClubPage(){
  const planes = [
    {id:'oro', nombre:'Plan Oro', precio:'$9.900 CLP', beneficios:['15% OFF en lecturas','Ritual grupal mensual','Grupo exclusivo']},
    {id:'platino', nombre:'Plan Platino', precio:'$19.900 CLP', beneficios:['30% OFF','Ritual + PDF','Prioridad de agenda']},
    {id:'anual', nombre:'Plan Anual Ilimitado', precio:'$199.000 CLP', beneficios:['Bonos exclusivos','Meet & Greet','Workshop trimestral']},
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Club de la Felicidad</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {planes.map(p => (
          <div key={p.id} className="card">
            <div className="text-xl font-extrabold">{p.nombre}</div>
            <div className="text-3xl font-black text-amber-300 mt-1">{p.precio}</div>
            <ul className="mt-4 space-y-1 text-sm text-zinc-300 list-disc ml-5">
              {p.beneficios.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
            <a href="#" className="btn mt-4">Unirme ahora</a>
          </div>
        ))}
      </div>
    </div>
  )
}
