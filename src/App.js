import './App.css'
import React from 'react';
import Home from './LandingPage/pages/Home'
import NavbarMain from './LandingPage/ComponentsMain/NavbarMain'
import Services from './LandingPage/pages/Services'
import Products from './LandingPage/pages/Products'
import SignUp from './LandingPage/pages/SignUp'
import AuthProvider from './LandingPage/authprovider';
import { BrowserRouter as Router, Switch, Route, useNavigate, Routes, Form } from 'react-router-dom';
import AppContainer from './Web App Components/AppContainer/AppContainer';

function App() {
  return (
    <div>
     
      {/* <AuthProvider> */}
      <Router>

{/* <Navbar/> */}
<Routes>
  <Route path='/' exact element={<Home />} />
  <Route path='/beri' element={<AppContainer />} />
  <Route path='/services' element={<Services />} />
  <Route path='/products' element={<Products />} />
  <Route path='/sign-up' element={<SignUp />} />
</Routes>
</Router>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
