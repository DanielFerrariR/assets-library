import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Assets Library',
  description: 'A simple assets library',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div id="root">{children}</div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
