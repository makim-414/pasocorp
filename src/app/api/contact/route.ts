import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type SubmitResult =
  | { ok: true; provider: "web3forms"; messageId?: string }
  | { ok: false; reason: string; status?: number };

async function submitToWeb3Forms(payload: Record<string, FormDataEntryValue>): Promise<SubmitResult> {
  const key = process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
  if (!key) {
    return { ok: false, reason: "missing_key" };
  }

  const body = new FormData();
  for (const [k, v] of Object.entries(payload)) {
    if (k === "access_key") continue;
    body.append(k, v as string);
  }
  body.append("access_key", key);

  let res: Response;
  try {
    res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body });
  } catch (err) {
    return { ok: false, reason: `network: ${(err as Error).message}` };
  }

  let json: { success?: boolean; message?: string; data?: { id?: string } } | null = null;
  try {
    json = (await res.json()) as { success?: boolean; message?: string; data?: { id?: string } };
  } catch {
    return { ok: false, reason: "non_json_response", status: res.status };
  }

  if (!res.ok || json?.success !== true) {
    return { ok: false, reason: json?.message ?? `http_${res.status}`, status: res.status };
  }

  return { ok: true, provider: "web3forms", messageId: json?.data?.id };
}

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    try {
      const json = (await req.json()) as Record<string, string>;
      const fd = new FormData();
      for (const [k, v] of Object.entries(json)) fd.append(k, v);
      form = fd;
    } catch {
      return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
    }
  }

  if (form.get("botcheck")) {
    return NextResponse.json({ ok: true, spam: true });
  }

  const payload: Record<string, FormDataEntryValue> = {};
  for (const [k, v] of form.entries()) payload[k] = v;

  const source = String(payload["_source"] ?? "unknown");
  const subject = String(payload["subject"] ?? "PASO 웹사이트 문의");
  const name = String(payload["name"] ?? "");
  const email = String(payload["email"] ?? "");

  const result = await submitToWeb3Forms({
    ...payload,
    subject,
    from_name: name || "PASO 웹사이트",
    replyto: email || "noreply@pasocorp.com",
  });

  const ts = new Date().toISOString();
  if (result.ok) {
    console.log(JSON.stringify({ tag: "contact_submit", status: "ok", source, subject, ts, messageId: result.messageId }));
    return NextResponse.json({ ok: true });
  }

  console.error(JSON.stringify({ tag: "contact_submit", status: "fail", source, subject, ts, reason: result.reason, http: result.status }));
  return NextResponse.json({ ok: false, error: result.reason }, { status: result.reason === "missing_key" ? 503 : 502 });
}

export async function GET() {
  const hasKey = Boolean(process.env.WEB3FORMS_KEY ?? process.env.NEXT_PUBLIC_WEB3FORMS_KEY);
  return NextResponse.json({ ok: true, configured: hasKey, ts: new Date().toISOString() });
}
