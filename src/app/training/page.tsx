import React from 'react'
import TrainingIntroSection from '@/components/program/Trainings/training/Training'
import TrainingGallerySection from '@/components/program/Trainings/session/Session'
import Footer from '@/components/section/footer/Footer'
const page = () => {
  return (
    <div>
        <TrainingIntroSection/>
        <TrainingGallerySection/>
        <Footer/>

    </div>
  )
}

export default page