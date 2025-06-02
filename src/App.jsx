import { useState } from 'react'
import WavyTabMenu from './components/WavyTabMenu'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('ALL')

  return (
    <div className="app">
      <h1>Wavy Tab Menu Demo</h1>
      <WavyTabMenu activeTab={activeTab} onTabChange={setActiveTab} />
      
    </div>
  )
}

export default App
