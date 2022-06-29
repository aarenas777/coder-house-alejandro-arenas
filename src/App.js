
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import { Navbar } from './components/Navbar/Navbar';


function App() {
  return (
    <div style={{width: "100%"}}>
      <Navbar/>
      <Dashboard/>

    </div>
  );
}

export default App;
