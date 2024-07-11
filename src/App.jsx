import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  )
}

export default App
