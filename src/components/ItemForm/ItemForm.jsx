import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";


export function ItemForm({ onPost }) {
  const history = useHistory();
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const newImage = {
    path: path,
    description: description,
    likes: 0,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/gallery", {
      method: "POST",
      body: JSON.stringify(newImage),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setPath("");
        setDescription("");
        onPost();
        history.push('/');
      })
      .catch((error) => {
        alert(error);
        console.error(error);
        res.sendStatus(500);
      });
  };

  const returnToHome = () => {
    history.push('/');
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: ".5rem"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="url-inpur">Url:</label>
        <input
          onChange={(event) => setPath(event.target.value)}
          type="text"
          placeholder="url"
          id="url-input"
          value={path}
        />
        <label htmlFor="desc-input">Description:</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Description"
          id="desc-input"
          value={description}
        />
        <button type="submit">Submit Image</button>
      </form>
      <button onClick={returnToHome}>Return</button>
    </div>
  );
}
