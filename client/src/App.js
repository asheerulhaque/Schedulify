import React from 'react';
import {CardComponent} from './components/RoleCards/CardComponent'
import { NavbarComponent } from './components/Navbar/Navbar';
import About from './components/About/about';
import FooterSection from './components/Footer/footer';
import './App.css';

function App() {

   return (
    <div className="App">
      <div>
        <NavbarComponent />
        <About />
        <CardComponent />
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
