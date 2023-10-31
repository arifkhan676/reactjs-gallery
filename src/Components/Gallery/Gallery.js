import React from "react";
import ImageCard from "../Card/ImageCard";
import "./gallery.css";
import { Images } from "../ImageData/Images";

const Gallery = () => {
  return (
    <div className="container-gallery">
      <div className="header">
        <h3> Gallery </h3>
      </div>
      <div className="gallery">
        {Images.map((item) => {
          return <ImageCard image={item.src} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
