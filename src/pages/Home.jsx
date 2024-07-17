// import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import ContentList from '../components/ContentList'
import '../index.css'
import { contentDefault } from '../utils/index'
import CreatContent from '../components/CreateContent'

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
import {db} from '../service/firebase'

export default function Home() {
    const [fill, setFill] = useState(contentDefault);
    // console.log(fill);
    const [cardShow, setCardShow] = useState("Semua");
    // console.log(cardShow);
    
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

    const createContent = async (pengunggah, judul, deskripsi, tautan, gambar, jenis)=>{
      const contentCollection = collection(db, "contents");
      try {
        await addDoc(contentCollection, {
          pengunggah: pengunggah,
          judul: judul,
          deskripsi: deskripsi,
          tautan: tautan,
          gambar: gambar,
          jenis: jenis,
          timestamp: new Date().getTime(),
        });
        console.log("id content:", contentCollection.id);
        console.log(new Date().getTime());
      } catch (error) {
        console.log("error add db:", error);
      }
    }

  return (
    <>
        <Navbar />
        <Category setCardShow={setCardShow} />
        <ContentList content={fill} cardShow={cardShow}/>
        <CreatContent creatContent={createContent}/>
    </>
  )
}