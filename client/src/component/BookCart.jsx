import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './bookCart.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCart = ({ books, title }) => {
  return (
    <div className="mx-4 lg:mx-24 my:16">
      <h2 className="text-center text-5xl font-bold text-black my-5">
        {title}
      </h2>
      {/* cards */}
      
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to="/">
                <div className=" relative slide">
                  <img
                    src={book.imageUrl}
                    alt="imageUrl"
                    style={{ width: "200px", height: "300px" }}
                  />
                  <div className="absolute top-0  bg-blue-700 p-2 hover:bg-black rounded">
                    <span className="material-symbols-outlined w-6 right-0 text-white">shopping_cart</span>
                  </div>
                </div>

                <div>
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorName}</p>
                </div>

                <div></div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCart;
