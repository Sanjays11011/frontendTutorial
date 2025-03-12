import React, { Component } from 'react';

class ClassComponentsTut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Hello, Class Component!',
        };

        // Bind the event handler to the class instance
        this.handleClick = this.handleClick.bind(this);
    }

    // Event handler method
    handleClick() {
        this.setState({
            message: 'Button Clicked!',
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default ClassComponentsTut;