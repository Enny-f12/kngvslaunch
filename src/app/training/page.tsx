import React from 'react'
import Training from '@/components/program/Trainings/training/Training'
import TrainingGallerySection from '@/components/program/Trainings/session/Session'
import Footer from '@/components/landing-page/footer/Footer'
const page = () => {
  return (
    <div>
        <Training/>
        <TrainingGallerySection/>
        <Footer/>

    </div>
  )
}

export default page