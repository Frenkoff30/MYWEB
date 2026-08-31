import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "www.webostudio.cz";

/** Vercel dává každému projektu adresu *.vercel.app. Google si ji zaindexoval
 *  jako plnohodnotnou kopii webu, takže konkuruje vlastní doméně. Posíláme
 *  ji trvalým přesměrováním (308) na webostudio.cz. */
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host.endsWith(".vercel.app")) {
    const cil = new URL(request.nextUrl.pathname + request.nextUrl.search, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(cil, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Statické soubory a interní cesty Nextu přesměrovávat nepotřebujeme.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
