"use client";

import ContactForm from "@/app/contact/page";
import { Dialog } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperFormModal({ isOpen, onClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 ">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4 ">
        <Dialog.Panel className="w-full max-w-2xl rounded-lg p-6 ">
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 text-3xl cursor-pointer"
            >
              &times;
            </button>
          </div>
          <div className="bg-white rounded-4xl p-6  overflow-hidden">
            <ContactForm />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
