import userimg from "../../assets/images/doctor-img01.png"
import { useContext,useState } from "react"
import { authContext } from '../../context/AuthContext'
import Bookings from './Bookings'
import Profile from "./Profile"
import useGetProfile from "../../hooks/useFetchdata"
import { BASE_URL } from "../../config"
import Loading from "../../components/Loader/Loading"
import Error from "../../components/Error/Error"

const UserDashboard = () => {
  const { dispatch } = useContext(authContext);
  const [tab,setTab] = useState('bookings');
  const { data:userData, loading, error} = useGetProfile(`${BASE_URL}/users/profile/me`)

  console.log("userData => ",userData);

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
  }

  return (
    <div className="max-w-[1170px] px-5 mx-auto">

      { loading && <Loading/>}
      { error && <Error errorMessage={error}/> }
      {
        !loading && !error && 
        <div className="grid md:grid-cols-3 gap-10">
        <div className="pb-[50px] px-[30px] rounded-md">
          <div className="flex items-center justify-center">
          <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
            <img src={userimg} alt=""  className="w-full h-full rounded-full"/>
          </figure>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">George Shajan</h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">george@example.com</p>
          </div>

          <div className="mt-[50px] md:mt-[100px]">
            <button onClick={handleLogout} className="w-full bg-primaryColor text-white p-3 text-[16px] leading-7 rounded-md">Logout</button>
            <button className="w-full bg-red-600 text-white mt-4 p-3 text-[16px] leading-7 rounded-md">Delete</button>
          </div>
        </div>

        <div className="md:col-span-2 md:px-[30px]">
          <div>
            <button onClick={() => setTab('bookings')} className={`${tab === 'bookings' && 'bg-primaryColor text-white font-normal'} p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>My Bookings</button>

            <button onClick={() => setTab('settings')} className={`${tab === 'settings' && 'bg-primaryColor text-white font-normal'} py-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}>Profile Settings</button>
          </div>

          {
            tab === 'bookings' && <Bookings />
          }
          {
            tab === 'settings' && <Profile />
          }
        </div>
      </div>
      }
    </div>
  )
}

export default UserDashboard