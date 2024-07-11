import { FaGraduationCap } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  // console.log(location.pathname);

  return (
    <nav className="overflow-x-hidden fixed top-0 flex items-center justify-between pr-10 bg-sky-500 w-screen z-10 border-b-2 border-sky-900">
      <div className="flex items-center h-20 px-4 text-white">
        <h1 className="flex gap-3 text-4xl font-semibold"><span className="animate-bounce-slow"><FaGraduationCap /></span>Bang Info</h1>
      </div>
      {location.pathname == "/home" && 
      <Link to={"/Signup"}>
      <div className="flex items-center gap-1 text-white underline">
        <h5>Logout </h5>
      </div>
      </Link>}
      
    </nav>
  );
}
