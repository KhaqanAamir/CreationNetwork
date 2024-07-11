import React from 'react'
import '../../Styles/Pages/Company/RoadMap/RoadMapBuilderSection.css'

const RoadmapBuilderSection = () => {
  return (
    <section className="text-light bg-[url('Assets/Images/RoadMapBanner.png')] bg-repeat bg-cover mt-[-100px] pt-[100px] xl:pt-[100px]">
      <div>
        <div className='justify-center items-center h-80' style={{ display: 'flex' }}>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
            Vision, Progress <br />
            <span className='roadmapBuilderSection-main-span text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
              & Future Plans
            </span>
          </h1>
          <p className='text-gray-400 text-sm sm:text-base md:text-xl lg:text-xl'>
            Empowering Your Marketing Journey and Embracing the Future
          </p>
        </div>
      </div>
    </section>
  )
}

export default RoadmapBuilderSection
