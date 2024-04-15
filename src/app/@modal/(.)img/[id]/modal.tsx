"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="absolute h-screen w-screen bg-black/60 backdrop-blur-sm"
            onClose={onDismiss}
        >
            <div className="w-full h-full relative">
                {children}
                <button onClick={onDismiss} className="text-xl text-white absolute top-4 right-4">&times;</button>
            </div>
        </dialog>,
        document.getElementById("modal-root")!,
    );
}