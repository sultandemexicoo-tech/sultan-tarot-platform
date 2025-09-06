import { NextRequest, NextResponse } from 'next/server'
import { zoomCreateMeeting } from '@/lib/zoom'
import { z } from 'zod'

const Body = z.object({
  topic: z.string(),
  start_time: z.string(),
  duration: z.number().int().positive()
})

export async function POST(req: NextRequest) {
  try {
    const body = Body.parse(await req.json())
    const meeting = await zoomCreateMeeting(body)
    return NextResponse.json({ ok: true, join_url: meeting.join_url, start_url: meeting.start_url, id: meeting.id })
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 })
  }
}
