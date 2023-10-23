import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Avatar } from "flowbite-react";

const ReviewSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-10"
      >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border  ">
          <div className="space-y-6">
            <div className="text-black flex gap-2">
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
              <span class="material-symbols-outlined">star</span>
            </div>
            <div className="mt-7">
              <p className="mb-5">
                "An exceptional book that captivates from start to finish. The
                characters are richly developed, and the plot keeps you on the
                edge of your seat. A brilliant work of storytelling and a
                must-read."
              </p>
             
              <Avatar
                alt="avatar of Jese"
                img="src/assets/bookImage/avt-1.jpg"
                rounded
                className ='w-10 mb-4'
              />
              <h5 className="text-lg font-medium text-black">Mark Ping</h5>
              <p>CEO , ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
    
      </Swiper>
    </>
  );
};

export default ReviewSection;
