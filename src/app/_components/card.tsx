import Image from "next/image";
import Link from "next/link";

interface ImageProps {
    id: string | number;
    name: string;
    url: string;
}

export function Card({ image: { id, name, url } }: { image: ImageProps }) {
    return (
        <div className="w-48 h-48 flex flex-col">
            <Link href={`/img/${id}`}>
                <Image src={url} alt={name} style={{ objectFit: "contain" }} width={230} height={90} />
            </Link>
            <div>{name}</div>
        </div>
    );
}
