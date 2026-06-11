# BrandWeb

Prezentační web pro vlastní živnost zaměřenou na tvorbu webových stránek —
hlavní stránka představuje mě, mou práci, služby a ceník a obsahuje kontaktní
formulář pro poptávky.

Pracovní název projektu (BrandWeb) bude časem nahrazen finálním názvem značky.

## Technologie

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) pro styly

## Struktura projektu

```
src/app/
  layout.tsx     – základní rozvržení stránky (písmo, pozadí, metadata)
  page.tsx       – obsah hlavní stránky (hero, o mně, služby, kontakt...)
  globals.css    – globální styly a barevná paleta
public/          – statické soubory (obrázky, ikony)
```

Web je jednostránkový (sekce hero, statistiky, o mně, jak spolupráce probíhá,
portfolio, služby a ceník, kontakt) v tmavém, minimalistickém designu.

## Spuštění projektu lokálně

```bash
npm install
npm run dev
```

Web pak poběží na [http://localhost:3000](http://localhost:3000) a při uložení
změn v kódu se automaticky obnoví v prohlížeči.

## Kontaktní formulář (odesílání e-mailů)

Formulář na hlavní stránce odesílá poptávky přes API route `src/app/api/contact/route.ts`
pomocí služby [Resend](https://resend.com). Aby formulář fungoval, je potřeba v `.env.local`
nastavit:

```
RESEND_API_KEY=tvuj_resend_api_klic
CONTACT_EMAIL=email_kam_chodi_poptavky@example.com
CONTACT_FROM=Webo Studio <onboarding@resend.dev>
```

- `RESEND_API_KEY` – API klíč z účtu na [resend.com](https://resend.com) (stačí free plán).
- `CONTACT_EMAIL` – e-mailová adresa, na kterou mají poptávky chodit.
- `CONTACT_FROM` – nepovinné, odesílací adresa. Dokud není v Resend ověřená vlastní doména,
  použij výchozí `onboarding@resend.dev`.

Bez nastavených proměnných formulář zobrazí uživateli chybovou hlášku, že není ještě
nastavený. Stejné proměnné je potřeba doplnit i v nastavení projektu na Vercelu.
