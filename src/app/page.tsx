const imagesUrl = [
  "https://utfs.io/f/bb57cad2-c785-4338-91e5-6e7b08d4848d-f51xlm.webp",
  "https://utfs.io/f/61e425df-0f3a-4ad4-825b-e74862cbcefb-1wbh7b.webp",
  "https://utfs.io/f/8e5904f1-0fb1-4f69-88af-c6d5b1e54989-5plx5.webp",
  "https://utfs.io/f/4a241588-44a2-4785-b2f4-b308c0d9a888-av9pqn.webp",
];

const images = imagesUrl.map((url, index) => ({
  id: index + 1,
  src: url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index + 1}`}
            className="h-48 w-48"
          />
        ))}
      </div>
    </main>
  );
}
