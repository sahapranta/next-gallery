import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export function TopNav() {
    return (
        <nav className="flex items-center justify-between w-full border-b p-4 text-xl font-semibold">
            <div>Next Gallery</div>
            <div className="flex gap-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}