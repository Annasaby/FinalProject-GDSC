import { Link } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";

export default function SignupForm(){


    return(
        <div className="fixed flex flex-col gap-5 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-2/3 md:w-1/3">
            <div className="flex flex-col items-center">
            <h1 className="flex gap-3 text-4xl font-bold text-sky-900"><span><FaGraduationCap /></span>Bang Info</h1>
            <p className="text-sm font-light">Silakan masukan akun baru ataupun yang sudah anda miliki</p>
            </div>
            <div className="bg-sky-500 p-5 rounded-xl">
                 
                <form className="flex flex-col gap-5">
                <label className="text-white" >Email</label>
                <input className="bg-sky-100 rounded-lg p-1" type="text" placeholder="jhose@gmail.com"/>
                <label className="text-white" >Password</label>
                <input className="bg-sky-100 rounded-lg p-1" type="password" placeholder="*******"/>
                
                <Link to={"/home"} className="">
                <button className="w-full bg-sky-950 text-white hover:bg-sky-100 hover:text-sky-950 ease-in-out transition-all delay-75 rounded-lg" type="submit">
                    Submit
                </button>
                </Link>

                </form>  
                
            </div>
        </div>
    )
}