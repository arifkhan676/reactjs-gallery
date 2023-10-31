import React from "react";
import ImageCard from "../Card/ImageCard";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="container-gallery">
      <div className="header">
        <h3> Gallery </h3>
      </div>
      <div className="gallery">
        <ImageCard />
      </div>
    </div>
  );
};

export default Gallery;
