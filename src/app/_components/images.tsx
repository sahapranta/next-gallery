import { getMyImages } from "~/server/queries";
import { Card } from "./card";

export async function Images() {
    const images = await getMyImages();

    return (<div className="flex flex-wrap gap-4">
        {images.map(image => <Card key={image.id} image={image} />)}
    </div>);
}