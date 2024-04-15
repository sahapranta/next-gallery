import { getMyImages } from "~/server/queries";
import { Card } from "./card";
import { LayoutGrid } from "~/components/ui/layout-grid";

export async function Images() {
    const images = await getMyImages();

    const cards = images.map(image => ({
        id: image.id,
        content: <Card image={image} />,
        className: "md:col-span-1",
        thumbnail: image.url,
    }))

    return (
        <div className="h-screen py-20 w-full z-10">
            <LayoutGrid cards={cards} />            
        </div>
    );

    // return (<BentoGrid className="max-w-4xl mx-auto md:auto-rows-[16rem] mt-6">
    //     {images.map((item, i) => (
    //         <BentoGridItem
    //             key={i}
    //             href={`/img/${item.id}`}
    //             title={item.name}
    //             header={<Card image={item} />}
    //             className="md:col-span-1"
    //         />
    //     ))}
    // </BentoGrid>);
}