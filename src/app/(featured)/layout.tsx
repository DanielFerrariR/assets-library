import Header from '@/components/Header';

interface FeaturedLayoutProps {
  children: React.ReactNode;
}

export default function FeaturedLayout({
  children,
}: Readonly<FeaturedLayoutProps>) {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <Header />
      <div className="h-10" />
      {children}
    </div>
  );
}
