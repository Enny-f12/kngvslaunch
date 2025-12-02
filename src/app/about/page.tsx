import React from 'react'
import AboutUs from '@/components/aboutsection/about/AboutUs'
import HistorySection from '@/components/aboutsection/about/HistorySection'
import MissionSection from '@/components/aboutsection/about/MissionSection'
import ProgressImpact from '@/components/aboutsection/about/ProgressImpact'
const page = () => {
  return (
    <div>
        
        <AboutUs/>
        <ProgressImpact/>
        <MissionSection/>
        <HistorySection/>
        
    </div>
  )
}

export default page