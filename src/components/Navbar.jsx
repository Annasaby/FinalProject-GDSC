import { FaGraduationCap } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../service/firebase";
import { useState } from "react";

export default function Navbar() {
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
    <nav className="overflow-x-hidden fixed top-0 flex items-center justify-between pr-10 bg-sky-500 w-screen z-10 border-b-2 border-sky-900">
      <div className="flex items-center h-20 px-4 text-white">
        <h1 className="flex gap-3 text-4xl font-semibold"><span className="animate-bounce-slow"><FaGraduationCap /></span>Bang Info</h1>
      </div>
      <div className="flex items-center gap-1 text-white underline cursor-pointer" onClick={handleLogout}>
        <h5>Logout </h5>
      </div>  
    </nav>
  );
}
