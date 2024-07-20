import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
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
      if (pengunggah && judul && deskripsi && tautan && jenis) {
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
      } else {
        alert("seluruh data perlu diisi");
      }
    }

  return (
    <div className="overflow-x-hidden flex justify-center pt-8">
      {/* Add button */}
      <div onClick={()=>{setOpenform((prev) => !prev )}} className={` ${openform && '' } flex justify-center w-1/6 bg-white p-2 rounded-full hover:scale-110 ease-in-out transition-all cursor-pointer`}>
        <FaPlus className="text-dongker text-2xl" />
      </div>

      {/* Background */}
      <div onClick={()=>{setOpenform((prev) => !prev )}} className={`fixed ${openform || 'hidden'} top-0 z-30 bg-slate-600 opacity-50 h-screen w-screen`}></div>

      {/* Container */}
      <div className={`fixed ${openform || 'hidden'} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 px-5 py-2 w-3/4 bg-white rounded-xl md:w-1/3 `}>

        {/* Clossed button */}
        <div onClick={()=>{setOpenform((prev) => !prev )}} className="absolute flex justify-center items-center h-10 w-10 bg-red-400 z-50 top-0 right-0 rounded-bl-xl rounded-tr-xl cursor-pointer">
        <RxCross2 />
        </div>

        {/* Titile */}
        <div className="w-full flex flex-col justify-center items-center mb-5">
          <h2 className="text-dongker text-2xl font-semibold">Add Information</h2>
          <p className="text-dongker text-xs font-medium w-1/2 text-center">Tambah informasi yang orang lain belum tau</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative flex flex-col md:gap-3 text-dongker">
          <div className="w-full">
            <label className="ml-1 text-xs md:text-sm">Pengunggah</label>
            <input required id="uploader" className=" py-1 px-3 rounded-full w-full border-2 border-dongker" type="text" value={userEmail} disabled/>
          </div>
          <div className="w-full">
            <label className="ml-1 text-xs md:text-sm">Judul</label>
            <input required id="title" className=" py-1 px-3 rounded-full w-full border-2 border-dongker" type="text" value={judul} onChange={handleJudulChange} minLength={5}/>
          </div>
          <div className="w-full">
            <label className="ml-1 text-xs md:text-sm">Deskripsi singkat</label>
            <input required id="description" className=" py-1 px-3 rounded-full w-full border-2 border-dongker" type="text" value={deskripsi} onChange={handleDeskripsiChange} minLength={5} maxLength={225}/>
          </div>
          <div className="w-full">
            <label className="ml-1 text-xs md:text-sm">Tautan pendaftaran</label>
            <input required id="link" className=" py-1 px-3 rounded-full w-full border-2 border-dongker" type="text" value={tautan} onChange={handleTautanChange}/>
          </div>
          <div className="w-full">
            <label className="ml-1 text-xs md:text-sm">Unggah gambar</label>
            <input id="image" className=" rounded-md " type="file" onChange={handleFileChange}/>
          </div>
          <label className="ml-1 text-xs md:text-sm">Jenis</label>
          <div className=" grid grid-cols-2 gap-y-1">
            <label className="flex items-center">
              <input required type="radio" name="jenis" id="Beasiswa" value="Beasiswa" checked={jenis === "Beasiswa"} onChange={handleJenisChange} />
              <span className="ml-2">Beasiswa</span>
            </label>
            <label className="flex items-center">
              <input required type="radio" name="jenis" id="Lomba" value="Lomba" checked={jenis === "Lomba"} onChange={handleJenisChange} />
              <span className="ml-2">Lomba</span>
            </label>
          </div>

          <input
            className="col-span-3 w-1/3 place-self-center rounded-lg bg-dongker hover:bg-blue-900 text-white p-1"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}
