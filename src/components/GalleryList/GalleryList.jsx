import { GalleryItem } from "../GalleryItem/GalleryItem";

export function GalleryList({ pics, onLike }) {
  if (pics.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div style={{flex: "flex", flexDirection: "row"}}>
      {pics.map((pic) => {
        return (
          <GalleryItem key={pic.id} pic={pic} onLike={onLike}/>
        );
      })}
    </div>
  );
}
