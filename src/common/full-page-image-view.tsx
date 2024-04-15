import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
    const id = Number(props.photoId);
    if (Number.isNaN(id)) throw new Error("Invalid photo id");

    const image = await getImage(id);

    const userInfo = await clerkClient.users.getUser(image.userId);

    return (
        <div className="flex h-full w-3/4 min-w-0 items-center justify-center text-white">
            <div className="flex-shrink flex-grow mx-auto">
                <img src={image.url} className="object-contain mx-auto" alt={image.name} />
            </div>
            <div className="flex h-full w-56 flex-shrink-0 flex-col justify-center border-l">
                <div className="border-b p-2 text-xl">{image.name}</div>

                <div className="p-2">
                    <div>Uploaded By:</div>
                    <div>{userInfo.firstName} {userInfo.lastName}</div>
                </div>

                <div className="p-2">
                    <div>Created On:</div>
                    <div>{image.createdAt.toLocaleDateString()}</div>
                </div>

                <div className="p-2">
                    <form
                        action={async () => {
                            "use server";

                            await deleteImage(id);
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