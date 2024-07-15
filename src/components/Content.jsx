import { IoEllipsisVerticalSharp } from "react-icons/io5";
import {auth} from '../service/firebase'
import { useEffect, useState } from "react";

export default function Content({content,cardShow}){
    const [userEmail, setUserEmail] = useState("")
    useEffect(()=>{
        const user = auth.currentUser;

    
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setUserEmail(profile.email.split("@")[0]);
            });
        }
    },[]);

    // console.log(cardShow);
    const shouldDisplayContent = () => {
        if (cardShow === "Semua") {
            return true;
        } else if (cardShow === "Beasiswa" && content.category === "Beasiswa") {
            return true;
        } else if (cardShow === "Lomba" && content.category === "Lomba") {
            return true;
        }
        return false;
    };

    if (!shouldDisplayContent()) {
        return null;
    }

    return( 
        <div className={`overflow-x-hidden flex flex-col gap-2 items-center ${content.category === 'Beasiswa' ? 'bg-emerald-200 border-emerald-400' : 'bg-sky-200 border-sky-400'}  border-[1px] rounded-xl p-5 shadow-lg`}>
            <div className="flex justify-between items-center w-full">
            <p className="text-xs md:text-sm">{userEmail}</p>
            <IoEllipsisVerticalSharp className="cursor-pointer" />
            </div>
            <p className=" font-medium">{content.title}</p>
            <img className="w-1/2 max-w-80" src={content.img} alt="foto postingan" />
            <p className="self-start text-xs md:text-sm">{content.caption}</p>
            <a className="text-xs text-blue-500" target="none" href={content.link}>{content.link}</a>
        </div>
    );
}