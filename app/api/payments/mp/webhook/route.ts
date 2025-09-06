import { NextRequest, NextResponse } from 'next/server'
import { mpGetPayment } from '@/lib/mp'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json().catch(() => ({}))
    // MP puede enviar en query params 'id' y 'topic' o payload con 'data.id'
    const { searchParams } = new URL(req.url)
    const idFromQuery = searchParams.get('id')
    const idFromBody = data?.data?.id || data?.id
    const paymentId = idFromQuery || idFromBody
    if (!paymentId) return NextResponse.json({ ok: false, error: 'payment id missing' }, { status: 400 })

    const payment = await mpGetPayment(String(paymentId))
    // TODO: actualizar DB: marcar reserva/inscripción pagada y crear reunión Zoom si es lectura
    // Este endpoint debe responder 200 rápido para evitar reintentos de MP
    return NextResponse.json({ ok: true, status: payment.status })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 200 }) // responder 200 para evitar reintentos excesivos
  }
}
