import React from 'react'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

const App:React.FC = () => {
  return (
    <div className="container mx-auto bg-almost-white font-epilogue px-4 ">
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App
