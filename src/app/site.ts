/** Kanonická adresa webu. Vercel přesměrovává webostudio.cz → www.webostudio.cz (308),
 *  takže všechny odkazy pro vyhledávače musí mířit na www variantu. */
export const SITE_URL = "https://www.webostudio.cz";

export const SITE_NAME = "Webo Studio";

export const SITE_DESCRIPTION =
  "Navrhujeme a vytváříme moderní weby na míru pro živnostníky, řemeslníky a malé firmy. Weby, které skutečně prodávají — od 8 499 Kč, hotovo do 1–2 týdnů.";

/** Metadata podstránky. Bez tohohle by podstránky zdědily Open Graph značky
 *  z layoutu a při sdílení by se všechny tvářily jako hlavní stránka. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}

export const CONTACT = {
  email: "info@webostudio.cz",
  phone: "+420608462557",
  phoneDisplay: "608 462 557",
  instagram: "https://www.instagram.com/webo.cz",
  street: "Rokycanova 908",
  city: "Hlinsko",
  zip: "539 01",
  ico: "29639107",
  owner: "Jiří Švec",
};
