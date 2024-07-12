import { IoAdd } from "react-icons/io5";
import { useState } from "react";

export default function CreatContent() {
    const [openform, setOpenform] = useState(false)
    // console.log(openform);

  return (
    <div className="relative">
      {/* Add button */}
      <div onClick={()=>{setOpenform((prev) => !prev )}} className={`fixed ${openform && 'rotate-45' } top-40 md:top-32 right-5 md:right-10 bg-sky-400 p-2 w-fit rounded-full hover:scale-110 ease-in-out transition-all cursor-pointer z-30`}>
        <IoAdd className="text-white" />
      </div>

      <div onClick={()=>{setOpenform((prev) => !prev )}} className={`fixed ${openform || 'hidden'} top-0 z-20 bg-slate-600 opacity-50 h-screen w-screen`}></div>

      <div className={`fixed ${openform || 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 px-5 py-10 w-3/4 bg-sky-500 rounded-xl md:w-2/5 `}>

        <form action="" className="grid grid-cols-3 gap-3 md:gap-10">
          <label className="col-span-1 text-white">Creator</label>
          <input className="col-span-2 rounded-md" type="text" />
          <label className="col-span-1 text-white">Title</label>
          <input className="col-span-2 rounded-md" type="text" />
          <label className="col-span-1 text-white">Caption</label>
          <input className="col-span-2 rounded-md" type="text" />
          <label className="col-span-1 text-white">Register Link</label>
          <input className="col-span-2 rounded-md" type="text" />
          <label className="col-span-1 text-white">Image</label>
          <input className="col-span-2 rounded-md" type="file" />

          <input
            className="col-span-3 w-1/3 place-self-center rounded-md bg-sky-300 hover:bg-sky-400 text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
