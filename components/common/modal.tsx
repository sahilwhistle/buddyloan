"use client";

import { IMAGE_PATH } from "@/constants/constants";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  subTitle: string;
  confirmText?: string;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  subTitle,
  confirmText = "Confirm",
  onConfirm,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleConfirm = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      if (onConfirm) onConfirm();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div
        className={`max-w-sm mx-auto flex justify-center items-center flex-col bg-white m-2 p-6 rounded-lg shadow-lg transform transition-all ${
          isClosing ? "animate-modalOut" : "animate-modalIn"
        }`}
      >
        {/* Image */}
        <div>
          <img
            src={`${IMAGE_PATH}/confirm.png`}
            className="h-[100px] w-[206px] "
          />
        </div>
        {/* Title */}
        <h2 className="text-xl font-semibold mt-4 mb-4 text-b-blue max-w-[250px] text-center">
          {title}
        </h2>
        {/* Sub-Title */}
        <p className="text-[10px] text-black mb-4">{subTitle}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 min-w-[120px] font-semibold text-white bg-b-blue rounded-lg hover:bg-b-blue transition"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
