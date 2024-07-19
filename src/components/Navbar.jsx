import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { useState } from "react";
import Category from '../components/Category'
import { MdOutlineLogout } from "react-icons/md";


export default function Navbar({setCardShow, isScrolled}) {
  const [errors,setError] = useState(null);
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signup');
    } catch (error) {
      setError("Gagal logout: " + error.message);
      console.log(errors);
    }
  }


  return (
    <nav className={`overflow-hidden top-0 fixed ${isScrolled ? "bg-white  shadow-lg" : ""} bg-opacity-50 w-screen z-20 pb-3`}>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 pt-5 pb-1 px-10 w-full h-full">
        <div className="flex items-center text-white">
          <h1 className={`flex gap-3 text-2xl font-semibold `}><span className=""><FaGraduationCap /></span>Bang Info</h1>
        </div>
        <div className="md:-translate-x-14">
          <Category setCardShow={setCardShow} />
        </div>
        <div className="absolute md:relative right-10 md:right-0 top-5 md:top-0  flex items-center gap-1 text-white cursor-pointer" onClick={handleLogout}>
          <p className={`hidden md:inline underline  `}>Logout</p> 
          <p className={`md:hidden `}><MdOutlineLogout /></p>
        </div>
      </div>
    </nav>
  );
}
