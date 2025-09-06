import { NextRequest, NextResponse } from 'next/server'
import { mpCreatePreference } from '@/lib/mp'
import { z } from 'zod'

const Body = z.object({
  title: z.string(),
  amount: z.number().positive(),
  currency: z.string().default('CLP'),
  successUrl: z.string(),
  failureUrl: z.string(),
  metadata: z.record(z.any()).optional()
})

export async function POST(req: NextRequest) {
  try {
    const body = Body.parse(await req.json())
    const pref = await mpCreatePreference({
      title: body.title,
      unit_price: body.amount,
      currency_id: body.currency,
      success_url: body.successUrl,
      failure_url: body.failureUrl,
      metadata: body.metadata
    })
    return NextResponse.json({ ok: true, id: pref.id, init_point: pref.init_point, sandbox_init_point: pref.sandbox_init_point })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 })
  }
}
