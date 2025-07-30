import React from 'react'
import AboutUs from '@/components/aboutsection/aboutus/about/AboutUs'

import Footer from '@/components/section/footer/Footer'
import HistorySection from '@/components/aboutsection/aboutus/history/HistorySection'
import MissionSection from '@/components/aboutsection/aboutus/mission/MissionSection'
import ProgressImpact from '@/components/aboutsection/aboutus/progress/ProgressImpact'
const page = () => {
  return (
    <div>
        
        <AboutUs/>
        <ProgressImpact/>
        <MissionSection/>
        <HistorySection/>
        <Footer/>
    </div>
  )
}

export default page