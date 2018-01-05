import React from 'react';
//NavLink support styling
//NavLink must be placed under component <BrowserRouter>
import { NavLink } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import ListSideNav from './menu/list-side-nav.jsx';


const homeIconPath = (
    <svg
        className="nc-icon outline"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24">
        <g transform="translate(0, 0)">
            <polygon
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                points="12,2 3,10 3,23 9,23 9,16 15,16 15,23 21,23 21,10 "
                stroke-linejoin="miter"></polygon>
        </g>
    </svg>
);

const servicesIconPath = (
    <svg
        class="nc-icon outline"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24">
        <g transform="translate(0, 0)">
            <polyline
                data-color="color-2"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                points=" 16,7 16,2 8,2 8,7 "
                stroke-linejoin="miter"></polyline>
            <rect
                x="1"
                y="7"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="22"
                height="15"
                stroke-linejoin="miter"></rect>
            <line
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                x1="5"
                y1="7"
                x2="5"
                y2="22"
                stroke-linejoin="miter"></line>
            <line
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                x1="19"
                y1="7"
                x2="19"
                y2="22"
                stroke-linejoin="miter"></line>
        </g>
    </svg>
);

const projectsIconPath = (
    <svg
        class="nc-icon outline"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="24px"
        height="24px"
        viewBox="0 0 24 24">
        <g transform="translate(0, 0)">
            <rect
                x="1"
                y="1"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="22"
                height="22"
                stroke-linejoin="miter"></rect>
            <rect
                data-color="color-2"
                x="5"
                y="5"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="5"
                height="5"
                stroke-linejoin="miter"></rect>
            <rect
                data-color="color-2"
                x="14"
                y="5"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="5"
                height="5"
                stroke-linejoin="miter"></rect>
            <rect
                data-color="color-2"
                x="5"
                y="14"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="5"
                height="5"
                stroke-linejoin="miter"></rect>
            <rect
                data-color="color-2"
                x="14"
                y="14"
                fill="none"
                stroke="#4a5261"
                stroke-width="2"
                stroke-linecap="square"
                stroke-miterlimit="10"
                width="5"
                height="5"
                stroke-linejoin="miter"></rect>
        </g>
    </svg>
);

export default class SideNavigation extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            arrMenu : [
                {
                    listIsActive : false,
                    listIsExact : false,
                    listTo : '/',
                    listIcon : homeIconPath,
                    listText : 'Home'
                },
                {
                    listIsActive : false,
                    listIsExact : false,
                    listTo : '/dashboard',
                    listIcon : servicesIconPath,
                    listText : 'Dashboard'
                },
                {
                    listIsActive : false,
                    listIsExact : false,
                    listTo : '/cart',
                    listIcon : projectsIconPath,
                    listText : 'Cart'
                }
            ]
        };

        this.clickMenuIcon = this.clickMenuIcon.bind(this);
    }

    clickMenuIcon(e){
        this.setState({

        });
    };

    render(){
        const { arrMenu } = this.state;
        return(
            <div>
                <nav className="cd-side-navigation">                    
                    <ul className="nav flex-column">
                        {/* <li className="nav-item"><NavLink className="nav-link" activeClassName="active"  
                                exact to="/" 
                                onClick={this.clickMenuIcon}>{homeIconPath}Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active" 
                                to="/dashboard" 
                                onClick={this.clickMenuIcon}>{servicesIconPath}Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" activeClassName="active"  
                                to="/cart" 
                                onClick={this.clickMenuIcon}>{projectsIconPath}Cart</NavLink></li> */}

                        {arrMenu.map(function(val, idx){
                            return (    
                                        <ListSideNav key={idx}
                                                listIsExact = {val.listIsExact}
                                                listTo = {val.listTo}
                                                listIcon = {val.listIcon}
                                                listText = {val.listText}
                                        />
                                    );
                        })}

                    </ul>
                </nav>
                <div className="cd-side-container">
                    <AppRouter />
                </div>
            </div>
        );
    }

}

