import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../service/firebase";
import { useEffect, useState } from "react";


export default function Content({content,cardShow}){
    const [urlImage, setUrlImage] = useState("");

    // Mengambil gambar dari firebase storage
    useEffect(()=>{
        function getImage(){
            getDownloadURL(ref(storage, `image-content/${content.gambar}`))
            .then((url) => {
                setUrlImage(url);
                console.log(url);
                console.log(urlImage);
            })
            .catch((error) => {
                console.log("error download image: ", error);
            });
        }
        getImage();
    },[content.gambar,urlImage]);

    // Menentukan apakah konten ditampilkan, berdasarkan kategori
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
        <div className={`overflow-x-hidden relative flex flex-col gap-2 ${urlImage ? "justify-between" : "h-fit"}  bg-slate-300 text-dongker  border-[1px] rounded-xl p-5 shadow-lg`}>
            {/* Image */}
            {urlImage && <img className="w-full max-h-60 object-cover object-top self-center shadow-lg rounded-2xl" src={urlImage} alt="foto postingan" />}
            {/* Title */}
            <p className=" font-medium">{content.judul}</p>
            {/* Description */}
            <p className="self-start text-xs md:text-sm line-clamp-6 ">{content.deskripsi}</p>
            <div className="flex justify-between items-center w-full">
                {/* Uploader */}
                <p className="text-xs md:text-sm">By: {content.pengunggah}</p>
                {/* Link */}
                <a className="" target="none" href={content.tautan}>
                    <button className="bg-dongker hover:bg-blue-900 w-fit py-1 px-5 rounded-md text-white text-xs  ">Link</button>
                </a>
            </div>
        </div>
    );
}