import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

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
          <div className="flex w-full max-w-screen-md flex-col">
            <Header />
            <div className="h-10" />
            {children}
          </div>
        </div>
        <div id="modal" />
      </body>
    </html>
  );
}
