'use client';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@/assets/icons/close.svg';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: Readonly<ModalProps>) {
  const [modalRootElement, setModalRootElement] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    setModalRootElement(document.getElementById('modal-root'));
  }, []);

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
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    bodyElement.style.overflow = 'hidden';
    bodyElement.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      appElement.removeAttribute('inert');
      bodyElement.style.overflow = '';
      bodyElement.style.paddingRight = '';
    };
  }, []);

  if (!modalRootElement) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 m-4 h-[calc(100%-32px)] w-[calc(100%-32px)] rounded bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)] md:max-w-screen-md [@media(min-width:1200px)]:right-1/3">
      <button
        className="absolute right-4 top-4 hover:hover:fill-gray-500"
        onClick={onClose}
        aria-label="Close Modal"
      >
        <CloseIcon className="h-6 w-6" />
      </button>
      {children}
    </div>,
    modalRootElement,
  );
}
