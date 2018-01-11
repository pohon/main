import React from 'react';

export default class WordAnimation extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="center">
                <h1>
                    <span>My favorite food is</span>
                    <span className="word-wrapper">
                        <b class="visible"><i>s</i><i>u</i><i>s</i><i>h</i><i>i</i></b>
                        <b><i>p</i><i>i</i><i>z</i><i>z</i><i>a</i></b>
                        <b><i>s</i><i>t</i><i>e</i><i>a</i><i>k</i></b>
                    </span>
                </h1>
            </div>
        );
    }

}