import React from "react";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex justify-center items-center flex-col md:flex-row gap-12">
      <div className="md:w-1/2 ">
        <img
          src="src/assets/bookImage/favbook.jpg"
          alt=""
          className="rounded "
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="font-bold text-5xl my-5 md:w-3/4 leading-snug">
          Find Your Favorite <br />
          <span className="text-blue-700"> Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
          excepturi voluptas sint, ex sed ducimus debitis saepe. Quisquam,
          quaerat? Corporis, minima? Ipsam perferendis a reiciendis quo vitae ex
          amet. Voluptatum.
        </p>
        <div className="flex flex-col sm:flex-row justify-between  gap-6 md:w-3/4 my-14">
          <div>
            <h2 className="font-bold text-3xl">800+</h2>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">550+</h2>
            <p className="text-base">Register users</p>
          </div>
          <div>
            <h2 className="font-bold text-3xl">1200+</h2>
            <p className="text-base">PDF Downloads</p>
          </div>
        </div>

        <Link to="./shop">
          <button className="text-white bg-blue-700 px-6 py-2 my-3 hover:bg-black trasistion-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
