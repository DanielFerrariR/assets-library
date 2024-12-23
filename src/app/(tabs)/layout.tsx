import AssetModal from '@/components/AssetModal';
import Header from '@/components/Header';

interface TabsProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function TabsLayout({ children }: Readonly<TabsProps>) {
  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full max-w-screen-md flex-col">
        <Header />
        <div className="h-10" />
        {children}
        <AssetModal />
      </div>
    </div>
  );
}
