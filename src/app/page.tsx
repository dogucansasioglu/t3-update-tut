import { db } from "@/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div className="flex flex-col" key={image.id + "-" + index}>
            <img
              src={image.url}
              alt={`Image ${index + 1}`}
              className="h-48 w-48"
            />
            <div>
              <p className="text-sm">{image.name}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
