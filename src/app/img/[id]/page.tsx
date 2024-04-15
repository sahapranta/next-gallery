import { Card } from "~/app/_components/card";
import { getImage } from "~/server/queries";

export default async function PhotoModal(
    { params: { id: photoId } }
        : { params: { id: string } }) {
    const id = Number(photoId);
    if (Number.isNaN(id)) throw new Error('Invalid photo id');
    const image = await getImage(id);

    return <Card image={image} />;
}