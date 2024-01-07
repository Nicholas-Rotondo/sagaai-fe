import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ImageContainer from './components/ImageContainer';
import UserDash from './components/UserDash/UserDash';
import SignUp from './components/SignUp';

import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/userDash" element={<UserDash/>} />
            <Route path="/uploadContainer" element={<ImageContainer />} />
          </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
