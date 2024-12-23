import AssetModal from '@/app/(assets)/_components/AssetModal';
import { Suspense } from 'react';

interface AssetsLayoutProps {
  children: React.ReactNode;
}

export default function AssetsLayout({
  children,
}: Readonly<AssetsLayoutProps>) {
  return (
    <>
      {children}
      <Suspense fallback={null}>
        <AssetModal />
      </Suspense>
    </>
  );
}
