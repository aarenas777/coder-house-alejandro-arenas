
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import { CardDetail } from './components/CardDetail/CardDetail';
import { Cart } from './components/Cart/Cart';
import Dashboard from './components/Dashboard/Dashboard';
import { Navbar } from './components/Navbar/Navbar';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/products" element={<Dashboard />}></Route>
        <Route exact path="/products/:id" element={<CardDetail />}></Route>
        <Route exact path="/" element={<CardContainer />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
