import React from 'react'

import Hero from '@/components/landing-page/Hero'
import Faq from './components/landing-page/Faq'
import GetInvolved from '@/components/landing-page/GetInvolved'
import Intro from '@/components/landing-page/Intro'
import NewsSection from './components/landing-page/News'
import PartnersSection from './components/landing-page/Partners'
import OurPrograms from './components/landing-page/OurPrograms'
import HeroSection from './components/landing-page/HeroSection'


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
     

    </div>
  )
}

export default App