import React from 'react';
//NavLink support styling
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <ul>
    <li><NavLink activeClassName="active" exact 
          to="/">Home</NavLink></li>
    <li><NavLink activeClassName="active" 
          to="/dashboard">Dashboard</NavLink></li>
    <li><NavLink activeClassName="active"  
          to="/cart">Cart</NavLink></li>
  </ul>
);

export default Header;