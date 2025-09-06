export type CreatePreferenceInput = {
  title: string;
  quantity?: number;
  unit_price: number;
  currency_id: string; // 'CLP', 'USD', etc.
  success_url: string;
  failure_url: string;
  metadata?: Record<string, any>;
};

export async function mpCreatePreference(input: CreatePreferenceInput) {
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) throw new Error('MP_ACCESS_TOKEN no configurado');

  const body = {
    items: [{ title: input.title, quantity: input.quantity ?? 1, unit_price: input.unit_price, currency_id: input.currency_id }],
    back_urls: { success: input.success_url, failure: input.failure_url, pending: input.success_url },
    auto_return: 'approved',
    metadata: input.metadata ?? {}
  };

  const res = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error Mercado Pago: ${res.status} ${text}`);
  }
  return res.json();
}

export async function mpGetPayment(paymentId: string) {
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) throw new Error('MP_ACCESS_TOKEN no configurado');

  const res = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error consultando pago: ${res.status} ${text}`);
  }
  return res.json();
}
