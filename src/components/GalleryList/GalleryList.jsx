export function GalleryList({ pics }) {
  if (pics.length === 0) {
    return <p>Loading images...</p>;
  }

  return (
    <div style={{flex: "flex", flexDirection: "row"}}>
      {pics.map((pic) => {
        return (
          <div key={pic.id}>
            <img
              style={{ height: 100, width: 100 }}
              src={pic.path}
              alt={pic.description}
            />
            <button>Click me</button>
          </div>
        );
      })}
    </div>
  );
}
