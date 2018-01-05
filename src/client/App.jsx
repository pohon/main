import React from 'react';
// import Header from './components/Header.jsx';
import SideNavigation from './components/SideNavigation.jsx';
// import MainContainer from './components/MainContainer.jsx';

export default class App extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
        <SideNavigation />
    );
  }
};