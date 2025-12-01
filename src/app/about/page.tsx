import React from 'react'
import AboutUs from '@/components/aboutsection/aboutsection/about/AboutUs'
import HistorySection from '@/components/aboutsection/aboutsection/history/HistorySection'
import MissionSection from '@/components/aboutsection/aboutsection/mission/MissionSection'
import ProgressImpact from '@/components/aboutsection/aboutsection/progress/ProgressImpact'
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