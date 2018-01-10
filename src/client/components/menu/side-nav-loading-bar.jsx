import React from 'react';

export default class SideNavLoadingBar extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){

        const { loadingBarStatus, loadingBarTop } = this.props;
        const style = { top: loadingBarTop };

        switch (loadingBarStatus) {
            case 'hidden':
                return(
                    <div id="loading_bar" style={style} 
                        className="nav-loading-bar"></div>
                );
                break;
            case 'shown':
                return(
                    <div id="loading_bar" style={style} 
                        className="nav-loading-bar opac-visible"></div>
                );
                break;
            case 'scaling':
                return(
                    <div id="loading_bar" style={style} 
                        className="nav-loading-bar opac-visible scale"></div>
                );
                break;
            case 'scaled':
                return(
                    <div id="loading_bar" style={style} 
                        className="nav-loading-bar opac-visible scale expand-width"></div>
                );
                break;
            default:
                return(
                    <div id="loading_bar" style={style} 
                        className="nav-loading-bar"></div>
                );
        }
    

    }
}