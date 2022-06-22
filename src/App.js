
import './App.css';
import { CardWidget } from './components/CardWidget/Card';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <CardWidget name={"Zapatos"}/>
    </div>
  );
}

export default App;
