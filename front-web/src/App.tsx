import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Routes from './Routes';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Routes /> 
      <ToastContainer/>
    </>
  );
}

export default App;
