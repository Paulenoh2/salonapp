import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Beans from './components/Beans';


function App() {
  return (
    <div>
      <Navbar/>
      
        <Routes>
        
        <Route path='/' Component={Home}/>
        <Route path='/beans' Component={Beans}/>


        </Routes>
      
    
    </div>
  );
}

export default App;
