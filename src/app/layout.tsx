import type { Metadata } from "next";
import { Inter as FontSans, Montserrat } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavbarAndFooterComponents/Navbar";
import Footer from "@/components/NavbarAndFooterComponents/Footer";
import ResponsiveTester from "@/components/ResponsiveTester";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Tech Trek",
  description: "Best tech event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full text-foreground">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={cn(
          "relative h-full font-Montserrat antialiased",
          fontSans.variable, montserrat.className
        )}
      >
        <main className="relative flex flex-col min-h-screen bg-darkPurple">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>

        {/* TODO: remove ResponsiveTester before production */}
        <ResponsiveTester />
      </body>
    </html>
  );
}