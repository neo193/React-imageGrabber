import React from "react";

const Gallery = ({ imagesData }) => {
  return (
    <div
      className={
        imagesData
          ? "mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          : "mt-16 hidden grid-cols-2 md:grid-cols-4 gap-4"
      }
    >
      {imagesData?.map((i) => (
        <div key={i.id}>
          <img
            style={{ height: "216px", width: "384px" }}
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
