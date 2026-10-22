import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jirani Stays — Diani stays by the coast",
  description: "Find your Diani beach stay with Jirani Stays. Send us your dates on WhatsApp and we’ll check availability for you.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
