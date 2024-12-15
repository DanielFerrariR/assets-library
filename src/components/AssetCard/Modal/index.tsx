"use client";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import CopyLinkIcon from "@/assets/icons/copy--link.svg";
import CloseIcon from "@/assets/icons/close.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
}: ModalProps) {
  const isDesktop = useMediaQuery("screen and (min-width: 1200px)");

  // Click outside handler
  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent) => {
      const bodyElement = document.body;
      if (bodyElement === event.target) onClose();
    };

    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, [onClose]);

  // Prevent focus and scroll behind the modal
  useEffect(() => {
    const appElement = document.getElementById("app");
    const bodyElement = document.body;

    if (appElement && bodyElement) {
      appElement.setAttribute("inert", "true");
      bodyElement.style.overflow = "hidden";

      return () => {
        appElement.removeAttribute("inert");
        bodyElement.style.overflow = "";
      };
    }
  }, []);

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 md:max-w-screen-md rounded m-4 bg-white"
      style={{
        height: "calc(100dvh - 32px)",
        width: "calc(100% - 32px)",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        right: isDesktop ? "33%" : undefined,
      }}
    >
      {isOpen && (
        <div className="relative p-4">
          <div>{children}</div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              className="hover:hover:fill-gray-500"
              onClick={() => navigator.clipboard.writeText(copyLink)}
              aria-label="Copy Link"
            >
              <CopyLinkIcon className="w-6 h-6" />
            </button>
            <button
              className="hover:hover:fill-gray-500"
              onClick={onClose}
              aria-label="Close Modal"
            >
              <CloseIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>,
    document.getElementById("modal")!
  );
}
