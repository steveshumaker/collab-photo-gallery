import React from "react";
import { useState } from "react";

export function GalleryItem({ pic, onLike }) {
  const [imgDisplay, setImgDisplay] = useState(true);

  const handleClick = () => {
    setImgDisplay(!imgDisplay);
  };

  const addLike = (id) => {
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

  const deleteImage = (id) => {
    fetch(`gallery/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      onLike();
      console.log(response);
    });
  };

  return (
    <div
      key={pic.id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {imgDisplay ? (
        <img
          onClick={handleClick}
          style={{ height: "15em", width: "15em" }}
          src={pic.path}
          alt={pic.description}
        />
      ) : (
        <p onClick={handleClick}>{pic.description}</p>
      )}
      <span>Likes: {pic.likes}</span>
      <button onClick={() => addLike(pic.id)}>Like</button>
      <button onClick={() => deleteImage(pic.id)}>Delete</button>
    </div>
  );
}
