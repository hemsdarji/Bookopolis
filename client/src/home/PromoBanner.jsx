import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex justify-center items-center flex-col md:flex-row gap-12 bg-yellow-300">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold mb-6">
          2023 national book <br />
          awards for fiction shortlist
        </h2>
        <p className="my-5">
          The 2023 National Book Awards Fiction Shortlist features remarkable
          works by renowned authors, offering a diverse range of narratives,
          from Jennifer Egan's futuristic exploration to Amanda Gorman's poetic
          reflections on social justice. These novels promise captivating
          storytelling and thought-provoking themes.
        </p>
        <Link to="./shop">
          <button className="text-white bg-blue-700 px-6 py-2 my-3 hover:bg-black trasistion-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img
          src="/src/assets/bookImage/promobanner.png"
          alt=""
          className="rounded w-100 h-200 mx-auto"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
