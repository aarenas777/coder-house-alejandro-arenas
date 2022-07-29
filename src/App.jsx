
import {  Route, Routes } from "react-router-dom";
import { CartContextProvider } from './store/cart-context';
import NavBar from "./components/Navbar/NavBar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <CartContextProvider>
      <div className='cuerpo' style={{backgroundColor:"#876445"}}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/inicio" element={<Home/>}></Route>
            <Route path="/productos" element={<ItemListContainer />}></Route>
            <Route path="/producto/:productName" element={<ItemDetailContainer />}></Route>
            <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
      </div>
    </CartContextProvider>
      
    
  );
}


export default App;