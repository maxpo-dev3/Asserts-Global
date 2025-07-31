"use client";

import ContactForm from "@/app/contact/page";
import { Dialog } from "@headlessui/react";
// import ContactForm from "@/components/ContactForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeveloperFormModal({ isOpen, onClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
        <Dialog.Panel className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
          <div className="flex justify-end mb-2">
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">&times;</button>
          </div>
          <ContactForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
