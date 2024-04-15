import Link from "next/link";

const urls = [
  'https://utfs.io/f/129f75e0-73bf-4ba8-a7c9-f1113fc0a967-x1d9ye.jpg',
  'https://utfs.io/f/47014ae9-f1c3-43c4-b01a-f8d4047991a1-uoxxzh.jpg',
  'https://utfs.io/f/df6d2964-6b11-443b-843c-bf1f63e825ee-8s636t.jpg',
  'https://utfs.io/f/bc43009e-7186-4835-a386-1de9bcac9caa-wivhnv.jpg',
];

const mockImages = urls.map((url, i) => ({ id: i + 1, url }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
