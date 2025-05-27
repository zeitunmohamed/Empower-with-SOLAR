import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Overview from "./Overview";  
import AboutUs from "./AboutUs";
import SolarSolutions from "./SolarSolutions";
import ContactUs from "./ContactUs";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Footer from './Footer';
import SolarProductsAdmin from "./SolarProductsAdmin";


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Navbar />
    
    

      <Routes><Route path="/" element={<Overview />} />
<Route path="/about-us" element={<AboutUs />} />
<Route path="/solar-solutions" element={<SolarSolutions />} />
<Route path="/contact-us" element={<ContactUs />} />
 <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<SolarProductsAdmin />} /> {/* ✅ Add this */}


      </Routes>
    
        <Footer/>
    </>
  );
}

export default App;
