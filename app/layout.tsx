import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Heybike Villain Review 2026 | Specs, Price & Real Test Results",
    template: "%s | HeybikeVillain.shop",
  },
  description:
    "In-depth Heybike Villain review covering top speed, real-world range, torque, and pricing. See if this $1,299 electric dirt bike is worth it.",
  metadataBase: new URL("https://heybikevillain.shop"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HeybikeVillain.shop",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
