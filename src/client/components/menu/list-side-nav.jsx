import React from 'react';
import { NavLink } from 'react-router-dom';

export default class ListSideNav extends React.Component{

    constructor(props){
        
        super(props);
            
    }

    render(){

        const { listTo, listOnClick, listText, listIcon, listIsExact } = this.props;
        
        return(
            <li className="nav-item">
                <NavLink className = "nav-link"
                         activeClassName = "active"
                         exact={listIsExact}
                         to = {listTo}
                         onClick = {listOnClick}>
                            {listIcon}{listText}
                </NavLink>
            </li>
        );
    }

}