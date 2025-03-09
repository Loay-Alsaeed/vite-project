import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/DesignDetails';
import Login from './pages/Login';
import Users from './pages/Users';
import Register from './pages/Register';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/users" element={<Users />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
  );
}

export default App;
