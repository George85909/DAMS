import React from 'react'

const Home = () => {
  return (
    <>
      <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* == hero content == */}

            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
                  We help patients live a healthy, longer life
                </h1>
                <p className='text_para'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam natus sed quos nostrum pariatur. Velit laboriosam nisi veritatis animi nam, ullam odit nulla nihil nesciunt possimus id beatae, obcaecati nostrum.
                </p>

                <button className='btn'>
                  Request an Appointment
                </button>
              </div>

              {/* HERO COUNTER */}

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    30+
                  </h2>
                  {/* yellow line */}
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of Experience</p>
                </div> 

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    10+
                  </h2>
                  {/* yellow line */}
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Hospitals</p>
                </div>  

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    100%
                  </h2>
                  {/* yellow line */}
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>  
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Home