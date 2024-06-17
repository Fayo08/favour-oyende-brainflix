import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import './App.scss';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import VideoDetailsPage from './pages/VideoDetailsPage/VideoDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header />
    
   <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/upload" element={<VideoUploadPage />} /> 
          <Route path="/videos/:videoId" element={<VideoDetailsPage />} /> 
          <Route path="*" element={<NotFoundPage />} />

   </Routes>
   </BrowserRouter>
    
     
    </>
  )
}

export default App
