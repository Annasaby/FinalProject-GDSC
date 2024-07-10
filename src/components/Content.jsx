import { IoEllipsisVerticalSharp } from "react-icons/io5";

export default function Content({content}){
    if(content.category == "Lomba"){
        document.getElementById("container");

    }
    return(
        <div id="container"  className={`overflow-x-hidden flex flex-col gap-2 items-center ${content.category === 'Beasiswa' ? 'bg-emerald-200 border-emerald-400' : 'bg-sky-200 border-sky-400'}  border-[1px] rounded-xl p-5 shadow-lg`}>
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