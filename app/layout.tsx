import Provider from "@/components/HOC/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const font = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Landing Page",
  description: "Software Landing Page using Next.js and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
        </Provider>
      </body>
    </html>
  );
}
