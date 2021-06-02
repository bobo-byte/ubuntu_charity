import React from "react";
import Tile from "./Tile";
import data from "./assets/data/sample/titleData";

const GalleryData = ({ data }) => {
  return (
    <div className="tiles">
      {data.map((data) => {
        return <Tile data={data} key={data.id} />;
      })}
    </div>
  );
};

const Gallery = () => {
  return (
    <div style={{ margin: "60px" }}>
      <h2>Our Gallery</h2>
      <p className="subheading-sections"> Coming soon !!</p>
      <hr />

      <GalleryData data={data} />
      <button id="gallery-btn" className="rounded-3">
        SEE GALLERY
      </button>
    </div>
  );
};

export default Gallery;
