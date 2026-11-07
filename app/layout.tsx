import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata: Metadata = {
  title: "PM Cell Vacaria | Assistência Técnica de Celular e Blindagem",
  description:
    "Troca de tela, bateria, traseira, conector e recuperação de celular molhado em Vacaria/RS. Blindagem NanoTitanium. Coleta e entrega. Orçamento pelo WhatsApp.",
  openGraph: {
    title: "PM Cell Vacaria | Assistência Técnica Especializada",
    description: "Reparos e blindagem para o seu smartphone em Vacaria/RS. Orçamento rápido pelo WhatsApp.",
    images: ["/images/blindagem-iphone.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#03060f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </body>
    </html>
  );
}
