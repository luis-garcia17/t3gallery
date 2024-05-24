import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/cf004fcf-e6ae-44f0-b866-1bb31c9968c8-wpgxpo.png ",
  "https://utfs.io/f/3b5cddb1-bb39-416b-9e57-30014fa409b5-539iyw.jpeg",
  "https://utfs.io/f/c597a87f-04c4-497f-9c93-207a1bd020f8-4f6zyt.png",
  "https://utfs.io/f/04b54dd7-f336-4da6-9388-09cce26b6dc8-gab69c.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
