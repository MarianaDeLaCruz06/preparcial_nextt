import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "./providers/counter-store-provider";
import NavBar from "@/components/nav-bar/NavBar";

export const metadata: Metadata = {
  title: "Preparcial Next",
  description: "Aplicación frontend del examen parcial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-100 antialiased">
        <CounterStoreProvider>
          <NavBar />
          <main className="p-8">{children}</main>
        </CounterStoreProvider>
      </body>
    </html>
  );
}
