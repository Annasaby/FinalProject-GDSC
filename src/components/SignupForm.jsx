import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { PiSignInBold } from "react-icons/pi";
import { useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../service/firebase'

export default function SignupForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(true);
    const [isHaveAccount, setIsHaveAccount] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
    
        if (isSignUp) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              navigate("/home");
            })
            .catch((error) => {
              if (error.code === 'auth/email-already-in-use') {
                    setIsSignUp(false);
                    handleSignIn();
                } else {
                    setError(error.message);
                    console.log(error);
                }
            });
        } else {
          handleSignIn();
        }
      };

      function handleSignIn(){
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
              navigate("/home");
            })
            .catch((error) => {
              setError(error.message);
              console.log(error);
            });
      }


    return(
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen w-screen gap-5 md:py-3">
          {/* Titile */}
          <div className="flex flex-col justify-center items-center md:gap-3 md:ml-20">
              <h1 className="flex md:flex-col justify-center items-center gap-3 md:gap-0 text-4xl md:text-6xl font-semibold text-white"><span><FaGraduationCap /></span>Bang Info</h1>
              <p className="hidden md:block text-white text-center text-nowrap">Lebih dari sekedar abang-abangan kampus mu</p>
          </div>

          {/* Form container */}
          <div className="flex flex-col justify-evenly w-2/3 md:h-full md:w-2/3 md:mr-5 md:pl-40 md:pr-20 gap-5 bg-white p-5 rounded-xl md:rounded-[60px] shadow-[0_0_20px_1px_#111111]">
            <div className="flex flex-col gap-2">
              {isHaveAccount ? (
                <h2 className="text-2xl md:text-4xl text-dongker font-semibold">Sign In to your Account.</h2>
              ):(
                <h2 className="text-2xl md:text-4xl text-dongker font-semibold">Sign Up your Account.</h2>
              )}
              <p className="text-xs text-dongker font-light">Silakan buat akun baru atau masuk dengan akun yang sudah anda miliki</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-dongker" >Email Address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-100 border-[1px] border-dongker rounded-full py-1 px-3" type="email" placeholder="jhose@gmail.com" required/>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-dongker" >Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-100 border-[1px] border-dongker rounded-full py-1 px-3" type="password" placeholder="*******" required/>
              </div>
              
              <button className="flex justify-center items-center self-center gap-3 mt-5 w-full md:w-1/3 bg-dongker hover:bg-blue-900 py-2 text-white font-semibold ease-in-out transition-all rounded-full" type="submit">
                {isHaveAccount ? (
                    <>
                      Masuk <PiSignInBold />
                    </>
                  ) : (
                    "Daftar"
                  )}
              </button>
            </form>

            {/* Signup/Signin */}
            <div className="flex flex-col justify-center gap-2">
              <hr className="w-full border-t border-dongker" />
              <p className="text-xs place-self-center">Belum punya akun? <span className="text-blue-900 cursor-pointer" onClick={()=>{setIsHaveAccount((prev)=> !prev)}}>daftar</span></p>
            </div>

          </div>

          {/* Error handling */}
          {error && <p className="text-xs text-red-500 mt-2">Terjadi kesalahan periksa kembali email dan password anda</p>}
      </div>
    )
}