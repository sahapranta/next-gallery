import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl mx-auto max-w-prose text-center">
          You are not signed in.
          <br />
          Please sign in to check your gallery images.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
