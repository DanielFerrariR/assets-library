'use client';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CopyLinkIcon from '@/assets/icons/copy--link.svg';
import CloseIcon from '@/assets/icons/close.svg';
import { useMediaQuery } from 'usehooks-ts';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  copyLink: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  copyLink,
}: Readonly<ModalProps>) {
  const isDesktop = useMediaQuery('screen and (min-width: 1200px)');

  // Click outside handler
  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent) => {
      const bodyElement = document.body;
      if (bodyElement === event.target) onClose();
    };

    document.addEventListener('mousedown', clickOutsideHandler);
    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
    };
  }, [onClose]);

  // Prevent focus and scroll behind the modal
  useEffect(() => {
    const appElement = document.getElementById('root')!;
    const bodyElement = document.body;

    appElement.setAttribute('inert', 'true');
    bodyElement.style.overflow = 'hidden';

    return () => {
      appElement.removeAttribute('inert');
      bodyElement.style.overflow = '';
    };
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 m-4 rounded bg-white md:max-w-screen-md"
      style={{
        height: 'calc(100dvh - 32px)',
        width: 'calc(100% - 32px)',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        right: isDesktop ? '33%' : undefined,
      }}
    >
      {isOpen && (
        <div className="relative">
          <div>{children}</div>
          <div className="absolute right-4 top-4 flex gap-2">
            <button
              className="hover:hover:fill-gray-500"
              onClick={() => navigator.clipboard.writeText(copyLink)}
              aria-label="Copy Link"
            >
              <CopyLinkIcon className="h-6 w-6" />
            </button>
            <button
              className="hover:hover:fill-gray-500"
              onClick={onClose}
              aria-label="Close Modal"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>,
    document.getElementById('modal-root')!,
  );
}
