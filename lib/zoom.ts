async function zoomAccessToken(): Promise<string> {
  const accountId = process.env.ZOOM_ACCOUNT_ID;
  const clientId = process.env.ZOOM_CLIENT_ID;
  const clientSecret = process.env.ZOOM_CLIENT_SECRET;
  if (!accountId || !clientId || !clientSecret) throw new Error('Credenciales Zoom faltantes');
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
  const res = await fetch(`https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`, {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}` }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoom token error: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.access_token as string;
}

export type CreateMeetingInput = {
  topic: string;
  start_time: string; // ISO UTC
  duration: number; // minutes
};

export async function zoomCreateMeeting(input: CreateMeetingInput) {
  const token = await zoomAccessToken();
  const res = await fetch('https://api.zoom.us/v2/users/me/meetings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      topic: input.topic,
      type: 2,
      start_time: input.start_time,
      duration: input.duration,
      timezone: 'UTC',
      settings: { join_before_host: false, waiting_room: true }
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoom create error: ${res.status} ${text}`);
  }
  return res.json();
}
