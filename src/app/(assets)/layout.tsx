import AssetModal from '@/app/(assets)/_components/AssetModal';

interface AssetsLayoutProps {
  children: React.ReactNode;
}

export default function AssetsLayout({
  children,
}: Readonly<AssetsLayoutProps>) {
  return (
    <>
      {children}
      <AssetModal />
    </>
  );
}
