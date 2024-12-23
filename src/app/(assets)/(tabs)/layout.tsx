import Header from '@/app/(assets)/(tabs)/_components/Header';
import AssetModal from '@/app/(assets)/_components/AssetModal';

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
