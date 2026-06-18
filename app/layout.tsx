import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Educakids360 — Ensine Seu Filho a Ler Até 5× Mais Rápido | Grafismo Fonético",
  description:
    "Conheça o Educakids360: a técnica americana Grafismo Fonético que ensina crianças a ler até 5 vezes mais rápido, com apenas 10 minutos por dia. Kit digital com +100 atividades. R$ 37,90.",
  openGraph: {
    title: "Educakids360 — Método Grafismo Fonético: 5× Mais Rápido",
    description:
      "A técnica americana Grafismo Fonético que ensina seu filho a ler com apenas 10 minutos por dia. Funciona mesmo com TDAH e autismo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* UTMify Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.pixelId="69b3d7ab3863311bf2f5b9f4";var a=document.createElement("script");a.setAttribute("async","");a.setAttribute("defer","");a.setAttribute("src","https://cdn.utmify.com.br/scripts/pixel/pixel.js");document.head.appendChild(a);`,
          }}
        />
        {/* UTMify UTMs */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck=""
          data-utmify-prevent-subids=""
          async
          defer
        />
        {/* Resource hints */}
        <link rel="dns-prefetch" href="//cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="//pay.cakto.com.br" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
