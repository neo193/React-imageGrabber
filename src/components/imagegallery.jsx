import React from "react";

const Gallery = ({ imagesData }) => {
  return (
    <div
      className={
        imagesData
          ? "mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16"
          : "mt-16 hidden grid-cols-2 md:grid-cols-4 gap-4"
      }
    >
      {imagesData?.map((i) => (
        <div className="aspect-video" key={i.id}>
          <img
            style={{ height: "216px", width: "448px" }}
            className="h-auto max-w-full rounded-lg"
            src={i.url}
            alt=""
          />
        </div>
      ))}
      ;
    </div>
  );
};

export default Gallery;
