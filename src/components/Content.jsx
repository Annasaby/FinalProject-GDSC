import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../service/firebase";
import { useEffect, useState } from "react";


export default function Content({content,cardShow}){
    const [urlImage, setUrlImage] = useState("");

    useEffect(()=>{
        getDownloadURL(ref(storage, `image-content/${content.gambar}.jpeg`))
        .then((url) => {
            setUrlImage(url);
            console.log(url);
            console.log(urlImage);
        })
        .catch((error) => {
            console.log("error download image: ", error);
        });
    },[]);


    // console.log(cardShow);
    const shouldDisplayContent = () => {
        if (cardShow === "Semua") {
            return true;
        } else if (cardShow === "Beasiswa" && content.jenis === "Beasiswa") {
            return true;
        } else if (cardShow === "Lomba" && content.jenis === "Lomba") {
            return true;
        }
        return false;
    };

    if (!shouldDisplayContent()) {
        return null;
    }

    return( 
        <div className={`overflow-x-hidden flex flex-col gap-2 items-center ${content.jenis === 'Beasiswa' ? 'bg-emerald-200 border-emerald-400' : 'bg-sky-200 border-sky-400'}  border-[1px] rounded-xl p-5 shadow-lg`}>
            <div className="flex justify-between items-center w-full">
            <p className="text-xs md:text-sm">{content.pengunggah}</p>
            <IoEllipsisVerticalSharp className="cursor-pointer" />
            </div>
            <p className=" font-medium">{content.judul}</p>
            <img className="w-1/2 max-w-80" src={urlImage} alt="foto postingan" />
            <p className="self-start text-xs md:text-sm">{content.deskripsi}</p>
            <a className="text-xs text-blue-500" target="none" href={content.tautan}>{content.tautan}</a>
        </div>
    );
}