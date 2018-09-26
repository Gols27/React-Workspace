import React, { Component } from 'react';

export class Details extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>I am here</h1>
                <h4>{this.props.match.params.id}</h4>
            </div>
        );
    }
}
