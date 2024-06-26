    import React from 'react';
    import { BsArrowRight } from 'react-icons/bs';
    import { Link } from 'react-router-dom';
    import starIcon from '../../assets/images/Star.png';

    const DoctorCard = ({doctor}) => {
        const {name, averageRating, totalRating, photo, specialization, totalPatients, hospital} = doctor
        const roundedRating = parseFloat(averageRating).toFixed(2);
        console.log("rounded rating => ",roundedRating)
        return (
        <div className='p-3 lg:p-5'>
            <div>
                <img src={photo} className='w-full' alt=''/>
            </div>
            <h2 className='text-[18px] leading-[30px] lg:text-[26] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>{name}</h2>
            <div className='mt-2 lg:mt-2 flex items-center justify-between'>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-1.5 lg:px-3 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                    {specialization}
                </span>
                <div className='flex items-center gap-[6px]'>
                    <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                        <img src={starIcon} alt=""/> {roundedRating}
                    </span>
                    <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                        ({totalRating})
                    </span>
                </div>
            </div>
            <div className='mt=[18px] lg:mt-3 flex items-center justify-between'>
                <Link to={`/doctors/${doctor._id}`}className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
        )
    }

    export default DoctorCard