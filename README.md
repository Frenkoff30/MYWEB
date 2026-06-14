# Webo Studio

Prezentační web studia **Webo**, které navrhuje a vytváří moderní webové stránky
pro živnostníky, řemeslníky a malé provozovny. Web představuje nabídku služeb,
ceník, postup spolupráce, ukázky a obsahuje kontaktní formulář pro poptávky.

## Technologie

- [Next.js 16](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) pro styly
- [Resend](https://resend.com) pro odesílání poptávek z kontaktního formuláře

## Struktura projektu

```
src/app/
  layout.tsx          – základní rozvržení stránky (písmo, metadata, globální komponenty)
  page.tsx            – obsah hlavní stránky (hero, o nás, proces, služby, recenze, FAQ, kontakt)
  globals.css         – globální styly, animace a barevná paleta
  ochrana-udaju/      – stránka se zásadami zpracování osobních údajů (GDPR)
  api/contact/        – API route pro odesílání poptávek přes Resend
  components/         – znovupoužitelné komponenty (formulář, animace na pozadí, scroll efekty...)
public/               – statické soubory (loga, ikony, obrázky)
```

Web je jednostránkový (single page) s tmavým, minimalistickým designem,
animovaným hvězdným pozadím a plynulými scroll efekty. Skládá se z těchto sekcí:

- **Úvod** – hero s hlavní nabídkou a interaktivní ukázkou webu
- **O nás** – kdo jsme a pro koho weby tvoříme
- **Jak pracujeme** – průběh spolupráce v krocích
- **Služby** – ceník a doplňkové služby
- **Portfolio** – ukázky realizací
- **Recenze** – hodnocení klientů
- **FAQ** – často kladené otázky
- **Kontakt** – formulář pro poptávky

## Spuštění projektu lokálně

```bash
npm install
npm run dev
```

Web pak poběží na [http://localhost:3000](http://localhost:3000) a při uložení
změn v kódu se automaticky obnoví v prohlížeči (Hot Reload).

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

## Nasazení

Web je určen pro hosting na [Vercelu](https://vercel.com) – po napojení repozitáře
se každý push do `main` automaticky nasadí na produkci.
