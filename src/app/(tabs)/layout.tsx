import Header from '@/components/Header';

interface TabsProps {
  children: React.ReactNode;
}

export default function TabsLayout({ children }: Readonly<TabsProps>) {
  return (
    <div className="flex w-full max-w-screen-md flex-col">
      <Header />
      <div className="h-10" />
      {children}
    </div>
  );
}
