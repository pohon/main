import React from 'react';
import { NavLink } from 'react-router-dom';

export default class SideNavLi extends React.Component{

    constructor(props){        
        super(props);            
    }

    render(){

        const { listTo, listOnClick, listOnMouseEnter, listOnMouseOut, listText, listIcon, listIsExact } = this.props;
        
        return(
            <li className="nav-item">
                <NavLink className = "nav-link"
                         activeClassName = "active"
                         exact={listIsExact}
                         to = {listTo}
                         onClick = {listOnClick}
                         onMouseEnter = {listOnMouseEnter}
                         onMouseLeave = {listOnMouseOut}>
                            {listIcon}{listText}
                </NavLink>
            </li>
        );
    }

}