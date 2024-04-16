"use client";

import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";


export function TopNav() {
    return (
        <nav className="w-full">
            <div className="flex items-center justify-between mt-4 mx-6 border shadow-inner shadow-sky-500 px-6 py-4 text-xl font-semibold rounded-md bg-slate-900/20 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <img src="/image.png" alt="logo" width={35} />
                    Next Gallery
                </div>
                <div className="flex items-center gap-6">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <SimpleUploadButton />
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}