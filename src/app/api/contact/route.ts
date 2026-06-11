import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  let body: {
    name?: string;
    phone?: string;
    email?: string;
    type?: string;
    message?: string;
    consent?: boolean;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Neplatná data." }, { status: 400 });
  }

  const { name, phone, email, type, message, consent } = body;

  if (!name || !phone || !consent) {
    return NextResponse.json(
      { error: "Vyplňte prosím povinná pole a potvrďte souhlas se zpracováním údajů." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !to) {
    console.error("Chybí RESEND_API_KEY nebo CONTACT_EMAIL v prostředí.");
    return NextResponse.json(
      { error: "Formulář není zatím nastaven. Zkuste to prosím později nebo nám napište přímo." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const typeLabels: Record<string, string> = {
    "novy-web": "Nový web na míru",
    redesign: "Redesign stávajícího webu",
    udrzba: "Údržba a úpravy",
    jine: "Jiné / nevím přesně",
  };

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "Webo Studio <onboarding@resend.dev>",
      to,
      replyTo: email || undefined,
      subject: `Nová poptávka z webu od ${name}`,
      text: [
        `Jméno: ${name}`,
        `Telefon: ${phone}`,
        email ? `E-mail: ${email}` : null,
        type ? `Typ projektu: ${typeLabels[type] || type}` : null,
        message ? `\nZpráva:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Odeslání se nezdařilo. Zkuste to prosím znovu." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Odeslání se nezdařilo. Zkuste to prosím znovu." }, { status: 500 });
  }
}
