
export function GalleryList({ pics }) {
  console.log(pics);

  if (pics.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div>
        {pics.map((pic) => {
            <img src={goatPath} alt=""  />
        })}
    </div>
    );
}
