interface ImageProps {
    name: string;
    url: string;
}

export function Card({ image: { name, url } }: { image: ImageProps }) {
    return (
        <div className="w-48">
            <img src={url} alt={name} />
            <div>{name}</div>
        </div>
    );
}
