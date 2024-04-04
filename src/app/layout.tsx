import { Urbanist } from "@next/font/google";
import Mail from "@widgets/Mail";
import Glassify from "@components/Glassify";
import Socials from "@widgets/Socials";
import Header from "@widgets/Header";
import Meta from "@components/meta/Meta";
import { Analytics } from "@vercel/analytics/react";
import "@vercel/analytics"
import "../shared/styles/globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={urbanist.className}>
      <head>
        <Meta />
      </head>

      <body className="text-base bg-[#231F20] text-slate-200">
        <Socials />
        <Mail />
        <Glassify />

        <Header />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
