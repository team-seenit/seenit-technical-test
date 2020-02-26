import React from 'react'
import EmbeddedVideo from './components/EmbeddedVideo'
import './App.css'

const videoData = {
  title: 'Seenit Camera Confidence Video',
  src: 'https://youtube.com/embed/OMMY3I1PjoI'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmbeddedVideo
          headingText="How to overcome camera shyness"
          video={videoData}
        />
      </header>
    </div>
  )
}

export default App
