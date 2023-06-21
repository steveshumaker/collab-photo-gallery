import { GalleryItem } from "../GalleryItem/GalleryItem";

export function GalleryList({ pics, onLike }) {
  if (pics.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        margin: ".5rem",
      }}
    >
      {pics.map((pic) => {
        return <GalleryItem key={pic.id} pic={pic} onLike={onLike} />;
      })}
    </div>
  );
}
