import Link from "next/link";
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage } from "~/server/queries";

interface ImageProps {
    id: string | number;
    name: string;
    url: string;
    userId: string;
}

export async function Card({ image }: any) {

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div>
            <Link href={`/img/${image.id}`}>
                <p className="font-bold text-xl text-white">{image.name}</p>
            </Link>
            <p className="font-normal text-base text-white"></p>
            {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                A serene and tranquil retreat, this house in the woods offers a peaceful
                escape from the hustle and bustle of city life.
            </p> */}
            <div className="flex justify-between items-center">
                <div className="py-2 text-slate-300">
                    <div>Uploaded By: {userInfo.firstName} {userInfo.lastName}</div>
                    <div>Created On: {image.createdAt.toLocaleDateString()}</div>
                </div>

                <div className="py-2">
                    <form
                        action={async () => {
                            "use server";

                            await deleteImage(image.id);
                        }}
                    >
                        <Button type="submit" variant="destructive">
                            Delete
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
