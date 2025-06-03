"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = () => {
    router.back(); // go back in history
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-xl">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
