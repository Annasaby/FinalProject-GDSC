// import React from 'react'
import { useState, useEffect } from 'react'
import '../index.css'
import Navbar from '../components/Navbar'
import ContentList from '../components/ContentList'
import { contentDefault } from '../utils/index'
import CreatContent from '../components/CreateContent'
import WelcomeMessage from '../components/WelcomeMessage'

import {
  collection,
  addDoc,
  // getDocs,
  // updateDoc,
  // doc,
  // deleteDoc,
  onSnapshot,
  query,
  orderBy
} from "firebase/firestore";
import {db, storage} from '../service/firebase'
// import { v4 } from 'uuid'
import { uploadBytes, ref } from 'firebase/storage'

export default function Home() {
  const [fill, setFill] = useState(contentDefault);
  const [cardShow, setCardShow] = useState("Semua");
  const [isScrolled, setIsScrolled] = useState(false);

  //Is Scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 80) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

    
    //Mengambil seluruh data setiap ada perubahan
    useEffect(() => {
      const q = query(collection(db, "contents"), orderBy("timestamp", "desc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFill(data);
      });
  
      return () => unsubscribe();
    }, []);

    //Mengupload data baru ke database
    const uploadContent = async (pengunggah, judul, deskripsi, tautan, jenis, timestamp)=>{
      const contentCollection = collection(db, "contents");
      try {
        await addDoc(contentCollection, {
          pengunggah: pengunggah,
          judul: judul,
          deskripsi: deskripsi,
          tautan: tautan,
          gambar: timestamp,
          jenis: jenis,
          timestamp: timestamp,
        });
        console.log("id content:", contentCollection.id);
      } catch (error) {
        console.log("error add db:", error);
      }
    }

    const uploadImage = async (selectedFIle, timestamp) => {
      if (selectedFIle) {
        const imgRef = ref(storage, `image-content/${timestamp}`);
        try {
          await   uploadBytes(imgRef, selectedFIle);
          console.log("gambar berhsil diunggah");
        } catch (error) {
          console.log("error uploadImage:", error);
        }
      }
    }

  return (
    <div className='overflow-x-hidden w-screen '>
        <Navbar setCardShow={setCardShow} isScrolled={isScrolled}/>
        <WelcomeMessage/>
        <CreatContent uploadContent={uploadContent} uploadImage={uploadImage}/>
        <ContentList content={fill} cardShow={cardShow}/>
    </div>
  )
}