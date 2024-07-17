import { IoEllipsisVerticalSharp } from "react-icons/io5";


export default function Content({content,cardShow}){
    

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
            <img className="w-1/2 max-w-80" src={content.gambar} alt="foto postingan" />
            <p className="self-start text-xs md:text-sm">{content.deskripsi}</p>
            <a className="text-xs text-blue-500" target="none" href={content.tautan}>{content.tautan}</a>
        </div>
    );
}