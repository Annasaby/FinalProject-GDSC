import { IoEllipsisVerticalSharp } from "react-icons/io5";

export default function Content({content,cardShow}){

    console.log(cardShow);
    // Fungsi untuk menentukan apakah konten harus ditampilkan
    const shouldDisplayContent = () => {
        if (cardShow === "Semua") {
            return true;
        } else if (cardShow === "Beasiswa" && content.category === "Beasiswa") {
            return true;
        } else if (cardShow === "Lomba" && content.category === "Lomba") {
            return true;
        } else if (cardShow === "") {
            return true;
        }
        return false;
    };

    // Jika kondisi tidak terpenuhi, jangan render apa pun
    if (!shouldDisplayContent()) {
        return null;
    }

    return( 
        <div className={`overflow-x-hidden flex flex-col gap-2 items-center ${content.category === 'Beasiswa' ? 'bg-emerald-200 border-emerald-400' : 'bg-sky-200 border-sky-400'}  border-[1px] rounded-xl p-5 shadow-lg`}>
            <div className="flex justify-between items-center w-full">
            <p className="text-sm">Creator: {content.creator}</p>
            <IoEllipsisVerticalSharp className="cursor-pointer" />
            </div>
            <img className="w-1/2" src={content.img} alt="foto postingan" />
            <p className="text-lg font-medium">{content.title}</p>
            <p className="self-start text-sm">{content.caption}</p>
            <a className="text-sm text-blue-500" target="none" href={content.link}>{content.link}</a>
        </div>
    );
}