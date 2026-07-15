import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVehicle from './components/AddVehicle'
import ViewVehicle from './components/ViewVehicle'
import HomePage from './components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddParking from './components/addParking'
import ViewAllParking from './components/viewParking'
import AddOffers from './components/addOffers'
import ViewAllOffers from './components/viewOffers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-vehicle' element={<AddVehicle />} />
          <Route path='/view-vehicle' element={<ViewVehicle />} />
          <Route path='/add-parking' element={<AddParking />} />
          <Route path='/view-parking' element={<ViewAllParking />} />
          <Route path='/add-offer' element={<AddOffers />} />
          <Route path='/view-offer' element={<ViewAllOffers />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
