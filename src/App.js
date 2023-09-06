// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './frontend/components/LoginForm';
import SignupForm from './frontend/components/signupform';
import Navigation from './frontend/components/navingation'; // Add this import

function App() {
  return (
    <Router>
      <Navigation /> {/* Include Navigation */}
      <Routes>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
      </Routes>
    </Router>
  );
}

export default App;
