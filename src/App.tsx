import React from 'react'

import Hero from '@/components/landing-page/hero/Hero'
import Footer from './components/landing-page/footer/Footer'
import Faq from './components/landing-page/faq/Faq'
import GetInvolved from '@/components/landing-page/involved/GetInvolved'
import Intro from '@/components/landing-page/intro/Intro'
import NewsSection from './components/landing-page/news/News'
import PartnersSection from './components/landing-page/partners/Partners'
import OurPrograms from './components/landing-page/programs/OurPrograms'
import HeroSection from './components/landing-page/herosection/HeroSection'

const App:React.FC = () => {
  return (
    <div>
     
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