import React from 'react'
import Sidebar from './components/section/sidebar/SideBar'
import Hero from '@/components/section/hero/Hero'
import Footer from './components/section/footer/Footer'
import Faq from './components/section/faq/Faq'
import GetInvolved from '@/components/section/involved/GetInvolved'
import Intro from '@/components/section/intro/Intro'
import NewsSection from './components/section/news/News'
import PartnersSection from './components/section/partners/Partners'
import OurPrograms from './components/section/programs/OurPrograms'
import HeroSection from './components/section/herosection/HeroSection'
const App:React.FC = () => {
  return (
    <div>
      <Sidebar/>
      <Hero/>
      <Intro/>
      <HeroSection/>
      <OurPrograms/>
      <PartnersSection/>
      <NewsSection/>
      <GetInvolved/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App