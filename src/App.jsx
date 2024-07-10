import { useState } from 'react'
import Navbar from './components/Navbar'
import Category from './components/Category'
import ContentList from './components/ContentList'
import './index.css'
import { contentDefault } from './utils/index'
import CreatContent from './components/CreateContent'

function App() {
  const [fill, setFill] = useState(contentDefault)
  // console.log(fill);
  
  return (
    <>
      <Navbar />
      <Category />
      <ContentList content={fill}/>
      <CreatContent />
    </>
  )
}

export default App
