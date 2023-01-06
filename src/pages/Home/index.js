import React from 'react'
import './styles.css'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuSection from '../../components/MenuSection'
import Testimonial from '../../components/Testimonial'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div id='home_container'>
        <Header/>
        <Banner/>
        <MenuSection/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home
