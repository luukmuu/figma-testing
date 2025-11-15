import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untitled UI - Customer Service Software",
  description: "The best customer service software for customer-first teams. Industry-leading email and live chat support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
