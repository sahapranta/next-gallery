"use client";

import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "../utils/uploadthing";

export function TopNav() {
    const router = useRouter();
    return (
        <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
            <div>Next Gallery</div>
            <div className="flex gap-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UploadButton endpoint="imageUploader" onClientUploadComplete={() => router.refresh()} />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}