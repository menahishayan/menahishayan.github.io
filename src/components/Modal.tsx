"use client";

import { IconX } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = useCallback(() => {
    router.back(); // go back in history
  }, [router]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center h-full w-full">
      <div className="bg-white p-8 rounded-2xl shadow-lg relative max-w-[80vw] max-h-[80vh] overflow-y-auto">
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
          <IconX size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}
