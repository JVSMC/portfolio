import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Index from './pages'


function App() {

  return (
    <BrowserRouter>
      <div className='navbar-container'>
        <Navbar />
      </div>
      <Routes>
        <Route index element={<Index />} />
      <Route path="*" element={ <h1>Not found</h1> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
