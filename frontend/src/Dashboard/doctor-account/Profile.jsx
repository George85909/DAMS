import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BASE_URL,token} from '../../config'
import { toast } from 'react-toastify'

const Profile = ({doctorData}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        specialization:'',
        ticketPrice: 0,
        timeSlots:[],
    })

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const updateProfileHandler = async(e) => {
        e.preventDefault();

        try{
            console.log(doctorData)
            const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
                method: 'PuT',
                headers: {
                    'content-type': 'application/json',
                    'Authorization' : `Bearer ${token}`  
                },
                body: JSON.stringify(formData)
            })

            const result = await res.json()

            if(!res.ok){
                throw Error(result.message)
            }

            toast.success(result.message)

        }catch(e){
            console.log("error at doctor profile update =>",e)
            toast.error(e.message)
        }

    }

    const addItem = (key,item) => {
        setFormData(prevFormdata => ({...prevFormdata,[key]:[...prevFormdata[key], item]}))
    }

    const handleChangeFunction = (key, index, event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            const updateItems = [...prevFormData[key]];
            console.log(updateItems);
            updateItems[index][name] = value;
    
            return {
                ...prevFormData,
                [key]: updateItems
            };
        });
    };

    const deleteItem = (key,index) => {
        setFormData(prevFormData => ({...prevFormData, 
            [key]:[prevFormData[key].filter((_,i) => i !== index)]}))
    }

    const handleTimeSlotChange = (event, index) => {
        handleChangeFunction('timeSlots', index, event);
    }

    const addTimeSlots = (e) => {
        e.preventDefault();

        addItem('timeSlots', {
            day: 'Sunday',
            startingTime: '10:00',
            endingTime: '12:00',
        })
    }    

    const deleteTimeSlots = (e,index) => {
        e.preventDefault();
        deleteItem('timeSlots', index)
    }

  return (
    <div>
        <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>

        <form action="">
            <div className="mb-5">
                <p className="form_label">Name*</p>
                <input type="text" 
                name='name' 
                value={formData.name} 
                onChange={handleInputChange}
                placeholder='Full Name'
                className='form_input'
                />
            </div>
            <div className="mb-5">
                <p className="form_label">Email*</p>
                <input type="email" 
                name='email' 
                value={formData.email} 
                onChange={handleInputChange}
                placeholder='Email'
                className='form_input'
                readOnly
                aria-readonly
                disabled
                />
            </div>
            <div className="mb-5">
                <p className="form_label">Phone*</p>
                <input type="number" 
                name='phone' 
                value={formData.phone} 
                onChange={handleInputChange}
                placeholder='Phone Number'
                className='form_input'
                />
            </div>
            <div className="mb-5">
                <div className='grid grid-cols-2 gap-5 mb-[30px]'>
                    <div>
                        <p className='form_label'>Specialization</p>
                        <select name="specialization"
                        id=""
                        value={formData.specialization}
                        onChange={handleInputChange}
                        >
                            <option value="">Select</option>
                            <option value="surgery">Surgery</option>
                            <option value="neurology">Neurology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="pulmonology">Pulmonology</option>
                            <option value="urology">Urology</option>
                            <option value="rheumatology">Rheumatology</option>
                            <option value="nephrology">Nephrology</option>
                            <option value="gastroenterology">Gastroenterology</option>
                            <option value="general-practice">General practice</option>
                            <option value="internal-medicine">Internal medicine</option>
                        </select>
                    </div>

                    <div>
                        <p className='form_label'>Ticket Price</p>
                        <input type="number" 
                        placeholder='100' 
                        name='ticketPrice'
                        value={formData.ticketPrice}
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="form_label">Time Slots</p>
                {
                    formData.timeSlots?.map((item,index) => (
                        <div key={index}>
                            <div>
                                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                                    <div>
                                        <p className='form_label'>Day</p>
                                        <select name="day" value={item.day} id=""
                                        className='form_input py-3.5'
                                        onChange={(e) => handleTimeSlotChange(e,index)}
                                        >
                                            <option value="">Select</option>
                                            <option value="monday">Monday</option>
                                            <option value="tuesday">Tuesday</option>
                                            <option value="wednesday">Wednesday</option>
                                            <option value="thursday">Thursday</option>
                                            <option value="friday">Friday</option>
                                            <option value="saturday">Saturday</option>
                                            <option value="sunday">Sunday</option>
                                        </select>
                                    </div>
                                    <div>
                                        <p className='form_label'>Starting Time</p>
                                        <input type="time" 
                                        name='startingTime'
                                        value={item.startingTime}
                                        className='form_input'
                                        onChange={e => handleTimeSlotChange(e, index)}
                                        />
                                    </div>
                                    <div>
                                        <p className='form_label'>Ending Time</p>
                                        <input type="time" 
                                        name='endingTime'
                                        value={item.endingTime}
                                        className='form_input'
                                        onChange={e => handleTimeSlotChange(e,index)}
                                        />
                                    </div>

                                    <div className='flex items-center'>
                                    <button onClick={(e) => deleteTimeSlots(e,index)}
                                     className='bg-red-600 rounded-full p-2 text-white text-[18px] mt-6  cursor-pointer'>
                                    <AiOutlineDelete />
                                </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <button onClick={addTimeSlots}
                className='bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer'>
                    Add TimeSlot
                </button>
            </div>

            <div className='mt-7'>
                <button type='submit' onClick={updateProfileHandler} className='bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>
            </div>
        </form>
    </div>
  )
}

export default Profile