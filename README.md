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
