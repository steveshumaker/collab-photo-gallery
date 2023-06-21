import React from "react";
import { useState, useEffect } from "react";
import { GalleryList } from "../GalleryList/GalleryList.jsx";
import { ItemForm } from "../ItemForm/ItemForm.jsx";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);

  function getImages() {
    fetch("/gallery")
      .then((response) => response.json())
      .then((images) => {
        setImageList(images);
      })
      .catch((error) => {
        console.error(error);
        throw new Error("Error!");
      });
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of Steve's Life</h1>
      </header>
      <ItemForm onPost={getImages}/>
      <GalleryList pics={imageList} onLike={getImages} />
    </div>
  );
}

export default App;
