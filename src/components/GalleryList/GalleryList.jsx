export function GalleryList({ pics }) {
  return (
    <>
      {pics.map((pic) => {
        <div key={pic.id}>
            <p>This should be a div</p>
        </div>;
      })}
    </>
  );
};
