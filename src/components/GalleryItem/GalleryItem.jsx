import React from "react";
import { useState } from "react";

export function GalleryItem({ pic, onLike }) {
  const [imgDisplay, setImgDisplay] = useState(true);

  const handleClick = () => {
    setImgDisplay(!imgDisplay);
  };

  const addLike = (id) => {
    console.log("id", id);
    fetch(`gallery/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      onLike();
      console.log(response);
    });
  };

  return (
    <div key={pic.id}>
      {imgDisplay ? (
        <img
          onClick={handleClick}
          style={{ height: 100, width: 100 }}
          src={pic.path}
          alt={pic.description}
        />
      ) : (
        <p onClick={handleClick}>{pic.description}</p>
      )}
      <span>Likes: {pic.likes}</span>
      <button onClick={() => addLike(pic.id)}>Like</button>
    </div>
  );
}
