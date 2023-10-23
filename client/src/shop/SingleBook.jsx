import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageUrl, authorName } = useLoaderData();

  return (
    <>
      <div className=" relative">
        <img
          src={imageUrl}
          alt="imageUrl"
          style={{ width: "300px", height: "400px" }}
        />
        <div className="absolute top-3 right-3  bg-blue-700 p-2 hover:bg-black rounded">
          <span className="material-symbols-outlined w-6 right-0 text-white">
            shopping_cart
          </span>
        </div>
      </div>

      <div>
        <h3>{bookTitle}</h3>
        <p>{authorName}</p>
      </div>

      <div>
        <p>$4</p>
      </div>
    </>
  );
};

export default SingleBook;
