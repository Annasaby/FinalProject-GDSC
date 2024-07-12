// import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Category from '../components/Category'
import ContentList from '../components/ContentList'
import '../index.css'
import { contentDefault } from '../utils/index'
import CreatContent from '../components/CreateContent'

export default function Home() {
    const [fill, setFill] = useState(contentDefault)
    // console.log(fill);
    const [cardShow, setCardShow] = useState("Semua");
    // console.log(cardShow);
    
  return (
    <>
        <Navbar />
        <Category setCardShow={setCardShow} />
        <ContentList content={fill} cardShow={cardShow}/>
        <CreatContent setFill={setFill}/>
    </>
  )
}