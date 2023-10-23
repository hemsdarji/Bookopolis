import React from 'react'
import BannerCard from './BannerCard';

const BannerSection = () => {
    return (
        <>
      <div className="bg-yellow-300 p-4 lg:p-24 flex items-center">
          <div className="flex  w-full flex-col md:flex-row justify-between items-center gap-12 py-40m">
            <div className="md:w-1/2 space-y-8 h-full">
    
                <h2 className="font-bold text-black text-5xl leading-snug capitalize">
                  by and cell your books{" "}
                  <span className="text-blue-700">for the best price</span>
                </h2>
                <p className='md:w-4/5'>
                  "By and Cell" is a gripping sci-fi novel by Sarah S. Pierce,
                  exploring the ethical dilemmas of human cloning. It delves into
                  the consequences of playing with life, raising thought-provoking
                  questions about identity and morality. A must-read for fans of
                  thought-provoking science fiction.
                </p>
                <div>
                  <input
                    type="search"
                    id="search"
                    name="search"
                    placeholder="search a book"
                    className="py-2 px-2 rounded-s-sm outline-none"
                  />
                  <button className="px-6 py-2 bg-blue-800 hover:bg-black font-medium transition-all ease-in duration-200 text-white">
                    Search
                  </button>
                </div>
              </div>
              <div>
                <BannerCard />
              </div>
            </div>
          </div>
        </>)
}

export default BannerSection;