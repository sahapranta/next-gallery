"use client";

import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";


export function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full border-b px-6 py-4 text-xl font-semibold">
            <div>Next Gallery</div>
            <div className="flex items-center gap-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}