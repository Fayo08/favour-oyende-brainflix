import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import './App.scss'
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage'



function App() {
 

 

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
