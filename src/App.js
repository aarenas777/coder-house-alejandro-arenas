
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';

import Dashboard from './components/Dashboard/Dashboard';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div style={{width: "100%"}}>
      <Navbar/>
      <CardContainer/>

    </div>
  );
}

export default App;
