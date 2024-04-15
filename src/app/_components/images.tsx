import { db } from "~/server/db";
import { Card } from "./card";


export async function Images() {
    const images = await db.query.images.findMany({
        orderBy: (model, { desc }) => desc(model.id),
    });

    return (<div className="flex flex-wrap gap-4">
        {images.map((image) => (
            <Card key={image.id} image={image} />
        ))}
    </div>);
}