import React from 'react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={onClose}
    >
      <div
        className="bg-white border border-white rounded-lg p-6 max-w-sm w-full max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-gray-600 text-xl font-bold">{title}</h2>
          <button
            className="text-gray-700 text-2xl focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="mt-4 overflow-y-auto flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
