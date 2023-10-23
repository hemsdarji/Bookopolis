import React from 'react'
import BestSellerBooks from './BestSellerBooks'
import BannerSection from './BannerSection'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBookSection from './OtherBookSection'

const Home = () => {
  return (
  <div>
    <BannerSection />
    <BestSellerBooks />
    <FavBook />
    <PromoBanner />
    <OtherBookSection />
    </div>
  )
}

export default Home;
