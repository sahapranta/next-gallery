import Image from "next/image";

interface ImageProps {
    name: string;
    url: string;
}

export function Card({ image: { name, url } }: { image: ImageProps }) {
    return (
        <div className="w-48 h-48 flex flex-col">
            <Image src={url} alt={name} style={{ objectFit: "contain" }} width={230} height={90} />
            <div>{name}</div>
        </div>
    );
}
