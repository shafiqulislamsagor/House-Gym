import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';
import '../css/app.css'
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;