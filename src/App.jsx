import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import './App.scss'
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage'



function App() {
 

  const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com "
  const API_KEY = "126618c7-4c9a-4698-a990-0b0320333914"
 


  
 

  return (
    <>
    <BrowserRouter>
    <Header />
    
   <Routes>
    <Route path="/" element={<Homepage  />}/> 
     <Route path="/upload" element={<VideoUploadPage />} /> 
     <Route path="/videoId" element={<VideoDetailsPage />} /> 

   </Routes>
   </BrowserRouter>
    
     
    </>
  )
}

export default App
