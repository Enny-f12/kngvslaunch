import React from 'react'

import Hero from '@/components/landing-page/Hero'
import Faq from './components/landing-page/Faq'
import GetInvolved from '@/components/landing-page/GetInvolved'
import NewsSection from './components/landing-page/News'
import PartnersSection from './components/landing-page/Partners'
import OurPrograms from './components/landing-page/OurPrograms'
import HeroSection from './components/landing-page/HeroSection'

const App:React.FC = () => {
  return (
    <div>
  
      <Hero/>
    
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