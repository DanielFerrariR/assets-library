import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Assets Library",
  description: "A simple assets library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div id="app" className="flex w-full justify-center p-4">
          {children}
        </div>
        <div id="modal" />
      </body>
    </html>
  );
}
