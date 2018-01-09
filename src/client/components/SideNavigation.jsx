import React from 'react';
//NavLink support styling
//NavLink must be placed under component <BrowserRouter>
import { NavLink } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import SideNavLi from './menu/side-nav-li.jsx';
import SideNavLoadingBar from './menu/side-nav-loading-bar.jsx';

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
                    listIsExact : true,
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
            ],
            loadingBarStatus : 'hidden', // hidden, shown, scaling, scaled
            loadingBarTop : '0px'
        };

        this.clickMenuIcon = this.clickMenuIcon.bind(this);
        this.hoverMenuIcon = this.hoverMenuIcon.bind(this);
        this.unhoverMenuIcon = this.unhoverMenuIcon.bind(this);
    }

    // hidden > shown
    hoverMenuIcon(e){
        const getTop = e.target.getBoundingClientRect().top;
        // pokoe selama gk lg scaling, boleh show
        if(this.state.loadingBarStatus !== 'scaling'){
            console.log('STATUS APA SIH :', this.state.loadingBarStatus);
            this.setState({
                loadingBarStatus : 'shown',
                loadingBarTop : getTop
            });
            
        }
    }

    // shown > scaling
    clickMenuIcon(e){
        if(this.state.loadingBarStatus === 'shown'){
            this.setState({
                loadingBarStatus : 'scaling'
            });
        }
    }

    // scaling > scaled
    componentDidMount(){      
        const loadingBar = document.getElementById('loading_bar');
        loadingBar.addEventListener('webkitTransitionEnd', (e) => {
            // console.log('animation completed');
            if(this.state.loadingBarStatus === 'scaling'){
                this.setState({loadingBarStatus : 'scaled'});
            }            
        });
    }

    // shown > hidden
    unhoverMenuIcon(e){
        if(this.state.loadingBarStatus === 'shown'){
            this.setState({
                loadingBarStatus : 'hidden'
            });
        }        
    }

    render(){
        const { arrMenu, loadingBarStatus, loadingBarTop } = this.state;
        console.log('status :', loadingBarStatus);
        return(
            <div>
                <nav className="cd-side-navigation">                    
                    <ul className="nav flex-column">
                        {arrMenu.map((val, idx) => {
                            return (
                                        <SideNavLi key={idx}
                                                listIsExact = {val.listIsExact}
                                                listTo = {val.listTo}
                                                listOnClick = {this.clickMenuIcon}
                                                listOnMouseEnter = {this.hoverMenuIcon}
                                                listOnMouseOut = {this.unhoverMenuIcon}
                                                listIcon = {val.listIcon}
                                                listText = {val.listText}
                                        />
                                    );
                        })}
                    </ul>
                </nav>
                <SideNavLoadingBar loadingBarStatus = {this.state.loadingBarStatus} 
                                   loadingBarTop = {this.state.loadingBarTop} />
                <div className="cd-side-container">
                    <AppRouter />
                </div>
            </div>
        );
    }

}

