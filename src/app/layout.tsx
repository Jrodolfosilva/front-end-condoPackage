import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  './global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CondoPackage",
  description: "Sistema de Gestão de Encomenda para Condomínio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const auth = false
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
