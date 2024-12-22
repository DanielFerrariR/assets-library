import CopyLinkIcon from '@/assets/icons/copy--link.svg';
import CloseIcon from '@/assets/icons/close.svg';

interface ModalHeaderProps {
  copyLink?: string;
  onClose: () => void;
}

export default function ModalHeader({
  onClose,
  copyLink,
}: Readonly<ModalHeaderProps>) {
  return (
    <div className="absolute right-4 top-4 flex gap-2">
      {copyLink && (
        <button
          className="hover:hover:fill-gray-500"
          onClick={() => navigator.clipboard.writeText(copyLink)}
          aria-label="Copy Link"
        >
          <CopyLinkIcon className="h-6 w-6" />
        </button>
      )}
      <button
        className="hover:hover:fill-gray-500"
        onClick={onClose}
        aria-label="Close Modal"
      >
        <CloseIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
