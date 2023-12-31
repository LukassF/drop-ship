import { ReduxProvider } from "@/data/provider";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReduxPersistor } from "@/data/persistor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dropship",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-transparent text-slate-900 overflow-x-hidden`}
      >
        <ReduxProvider>
          <ReduxPersistor>{children}</ReduxPersistor>
        </ReduxProvider>
        <script
          src="https://kit.fontawesome.com/f83777b1f5.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
