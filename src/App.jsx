import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import VideoContainer from './components/VideoContainer/VideoContainer'
import videoDetailsData from './assets/Data/video-details.json'
import Header from './components/Header/Header'

import './App.scss'

const api_key = "126618c7-4c9a-4698-a990-0b0320333914"

function App() {
 



  return (
    <>
    <BrowserRouter>
    <Header />
    <main>
    <VideoContainer
    videoDetailsData = {videoDetailsData}
     />
     </main>
   <Routes>
    <Route path="/" element={<PlantPage />} />
    <Route path="/:plantId" element={<PlantPage />} />
   </Routes>
   </BrowserRouter>
    
     
    </>
  )
}

export default App
