import { useNavigate } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa6";
import { useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../service/firebase'

export default function SignupForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isSignUp, setIsSignUp] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
    
        if (isSignUp) {
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
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
            .then((userCredential) => {
              navigate("/home");
            })
            .catch((error) => {
              setError(error.message);
              console.log(error);
            });
      }


    return(
        <div className="fixed flex flex-col gap-5 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 w-2/3 md:w-1/3">
            <div className="flex flex-col items-center">
                <h1 className="flex gap-3 text-4xl font-bold text-sky-900"><span><FaGraduationCap /></span>Bang Info</h1>
                <p className="text-sm font-light">Silakan masukan akun baru ataupun yang sudah anda miliki</p>
            </div>
            <hr className="w-full border-t border-black" />
            <div className=" p-5 rounded-xl">
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <label className="text-sky-900" >Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="bg-slate-100 border-[1px] border-sky-900 rounded-lg p-1" type="text" placeholder="jhose@gmail.com" required/>
                    <label className="text-sky-900" >Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="bg-slate-100 border-[1px] border-sky-900 rounded-lg p-1" type="password" placeholder="*******" required/>
                    
                    
                    <button className="w-full bg-sky-950 text-white hover:bg-sky-100 hover:text-sky-950 ease-in-out transition-all delay-75 rounded-lg" type="submit">
                        Submit
                    </button>
                    

                </form>
                
            </div>
            {error && <p className="text-xs text-red-500 mt-2">Terjadi kesalahan periksa kembali email dan password anda</p>}
        </div>
    )
}