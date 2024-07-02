import {Routes, Route} from 'react-router-dom'
import HomePage from './page/home'
import RoomPage from './page/room'

import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>{<HomePage/>}</h1>}/>
        <Route path="/room/:roomId" element={<RoomPage/>}/>
      </Routes>
    </div>
    
  )
}

export default App
