import React from "react";
import { useState, useEffect } from "react";
import { GalleryList } from "../GalleryList/GalleryList.jsx";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([]);

  function getImages() {
    fetch("/gallery")
      .then((response) => response.json())
      .then((images) => {
        // console.log(images);
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
      {/* <p>Gallery goes here</p>
      <img src="images/goat_small.jpg" /> */}
      <GalleryList pics={imageList} />
    </div>
  );
}

export default App;
