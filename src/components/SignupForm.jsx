import { Link } from "react-router-dom";

export default function SignupForm(){
    return(
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-sky-300 w-2/3 rounded-xl">
            <form action="" className="flex flex-col gap-5 text-white">
                <label >Email</label>
                <input type="text" />
                <label >Password</label>
                <input type="password" />
                <Link to="/home">
                <input type="submit" />
                </Link>
                
            </form>
        </div>
    )
}