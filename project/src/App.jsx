import { Route, Routes } from 'react-router-dom'
import'./App.css'
import Footer from './basics/Footer/Footer.jsx'
import Header from './basics/Header/Header'
import Products from './components/Products/Products'
import Cart from './pages/Cart/Cart.jsx'

function App() {

  return (
    <>
    <Routes>

      

     <Route path='/' element={<Products/>} />
     <Route path='/cart' element={<Cart/>} />

      

    </Routes>
    </>
  )
};

export default App
