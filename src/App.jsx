import { useState } from 'react'

import VideoContainer from './components/VideoContainer/VideoContainer'
import videoDetailsData from './assets/Data/video-details.json'
import Header from './components/Header/Header'

import './App.scss'


function App() {
 



  return (
    <>
     <Header />
     <main>

    <VideoContainer
    videoDetailsData = {videoDetailsData}
     />
   

     </main>
    </>
  )
}

export default App
