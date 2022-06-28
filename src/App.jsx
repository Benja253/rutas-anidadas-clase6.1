import { Link, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductItem from './components/routeProduct/ProductItem'
import Sales from './components/routeProduct/Sales'

function App() {


  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink 
              className={({isActive}) => isActive ? 'active link' : 'link'}
              to="/"
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => isActive ? 'active link' : 'link'}
              to="/contact"
            >Contact</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => isActive ? 'active link' : 'link'}
              to="/products"
            >Products Index</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => isActive ? 'active link' : 'link'}
              to="/products/1"
            >Products Id</NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => isActive ? 'active link' : 'link'}
              to="/products/sales"
            >Products Sales</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />


        {/* Ruta anidada */}
        <Route path='/products' element={<Products />}>
          <Route index element={<h1>No has seleccionado una ruta, por favor escoge una</h1>} />
          <Route path=':id' element={<ProductItem />} />
          <Route path='sales' element={<Sales />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App
