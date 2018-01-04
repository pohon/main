import React from 'react';
//NavLink support styling
//NavLink must be placed under component <BrowserRouter>
import { NavLink } from 'react-router-dom';



const Header = (props) => (
      <header>
            <div class="container">
                  <ul className="row">
                        <li><NavLink activeClassName="active" exact 
                              to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="active" 
                              to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink activeClassName="active"  
                              to="/cart">Cart</NavLink></li>
                  </ul>
            </div>
      </header>
  
);

export default Header;