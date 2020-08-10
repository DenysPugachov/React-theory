import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
    state = {
        counter: 0,
    };

    addCounter = () => {
        //more safely because setState() is async;
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            };
        });
    };

    render() {
        return (
            <>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>-</button>
            </>
        );
    }
}
