import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "./_components/images";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="relative">
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
      <div className="absolute bottom-0 left-0 right-0 -z-10 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute z-[-2] left-32 top-[10%] h-[800px] w-2/3 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#1a3629)] blur-3xl"></div>      
    </main>
  );
}
