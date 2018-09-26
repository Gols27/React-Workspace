import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Details} from '../details/Details';

export class List extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                
                <h4>List</h4>
                <ul>
                    <li><Link to="/list/1" >List 1</Link></li> 
                    <li><Link to="/list/2" >List 2</Link></li>    
                </ul>   

                <Route path={"${this.props.match.url}/:id"} component={Details} />
                
                <Route exact path="/list/2" render= { () => <h3>Please Select</h3> }  />


            </div>
        );
    }
}
