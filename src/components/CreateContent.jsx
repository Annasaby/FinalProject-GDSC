import { IoAdd } from "react-icons/io5";
import {auth, } from '../service/firebase'
import { useEffect, useState } from "react";

export default function CreatContent({uploadContent, uploadImage}) {
  // const {startUpload} = useStorage();
    const [openform, setOpenform] = useState(false)
    // console.log(openform);
    const [userEmail, setUserEmail] = useState("");
    
    const [pengunggah, setPengunggah] = useState("");
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [tautan, setTautan] = useState("");
    const [jenis, setJenis] = useState("");
    
    const [selectedFIle,setSelectedFile] = useState(null);

    //Mengambil email user
    useEffect(()=>{
        const user = auth.currentUser;
        if (user !== null) {
            user.providerData.forEach((profile) => {
                setUserEmail(profile.email.split("@")[0]);
            });
        }
    },[]);


    const handleJudulChange = (e)=>{
      const value = e.target.value;
      setJudul(value);
    }
    const handleDeskripsiChange = (e)=>{
      const value = e.target.value;
      setDeskripsi(value);
    }
    const handleTautanChange = (e)=>{
      const value = e.target.value;
      setTautan(value);

      setPengunggah(userEmail);
    }

    const handleFileChange = (e)=>{
      if (e.target.files && e.target.files[0]) {
        setSelectedFile(e.target.files[0]);
      }
    }

    const handleJenisChange = (e) => {
      setJenis(e.target.value);
    };
  

    const handleSubmit = (e)=>{
      e.preventDefault();

      const time = new Date().getTime();
      uploadContent(pengunggah, judul, deskripsi, tautan, jenis, time);
      uploadImage(selectedFIle, time);
      setPengunggah("");
      setJudul("");
      setDeskripsi("");
      setTautan("");
      setJenis("");


      setOpenform((prev) => !prev )
    }

  return (
    <div className="relative">
      {/* Add button */}
      <div onClick={()=>{setOpenform((prev) => !prev )}} className={`fixed ${openform && 'rotate-45' } top-40 md:top-32 right-5 md:right-5 bg-sky-400 p-2 w-fit rounded-full hover:scale-110 ease-in-out transition-all cursor-pointer z-30`}>
        <IoAdd className="text-white" />
      </div>

      <div onClick={()=>{setOpenform((prev) => !prev )}} className={`fixed ${openform || 'hidden'} top-0 z-20 bg-slate-600 opacity-50 h-screen w-screen`}></div>

      <div className={`fixed ${openform || 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 px-5 py-10 w-3/4 bg-sky-500 rounded-xl md:w-2/5 `}>

        <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 md:gap-10">
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Pengunggah</label>
          <input className="col-span-2 p-1 rounded-md h-10" type="text" value={userEmail} disabled/>
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Judul</label>
          <input className="col-span-2 p-1 rounded-md h-10" type="text" value={judul} onChange={handleJudulChange}/>
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Deskripsi singkat</label>
          <input className="col-span-2 p-1 rounded-md h-10" type="text" value={deskripsi} onChange={handleDeskripsiChange}/>
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Tautan pendaftaran</label>
          <input className="col-span-2 p-1 rounded-md h-10" type="text" value={tautan} onChange={handleTautanChange}/>
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Unggah gambar</label>
          <input className="col-span-2 rounded-md h-10" type="file" onChange={handleFileChange}/>
          <label className="col-span-1 flex items-center text-xs md:text-sm text-white">Jenis</label>
          <div className="col-span-2 grid grid-cols-2 gap-y-1">
            <label className="flex items-center">
              <input type="radio" name="jenis" id="Beasiswa" value="Beasiswa" checked={jenis === "Beasiswa"} onChange={handleJenisChange} />
              <span className="ml-2">Beasiswa</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="jenis" id="Lomba" value="Lomba" checked={jenis === "Lomba"} onChange={handleJenisChange} />
              <span className="ml-2">Lomba</span>
            </label>
          </div>

          <input
            className="col-span-3 w-1/3 place-self-center rounded-md bg-sky-300 hover:bg-sky-400 text-white"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
