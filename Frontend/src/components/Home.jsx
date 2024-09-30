import React from 'react'
import NavBar from './shared/Navbar.jsx'
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './CategoryCarousel.jsx'
import LatestJobs from './LatestJobs.jsx'
import Footer from './shared/Footer.jsx'




import useGetAllJobs from '@/hooks/useGetAllJobs.jsx'

const Home = () => {
  useGetAllJobs();

  return (
    <div >
        <NavBar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        <Footer/>

    </div>
  )
}


export default Home