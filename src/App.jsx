import React, { Component } from 'react';
import './App.scss';
import Clock from './Clock';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { hrs: 0, min: 0, sec: 0 };
        this.start = this.startTime.bind(this);
    }
    startTime() {
        setInterval(() => {
            const TIME = new Date;
            this.setState({ hrs: TIME.getHours() });
            this.setState({ min: TIME.getMinutes() });
            this.setState({ sec: TIME.getSeconds() });
        }, 1000);
    }
    componentDidMount() { this.start(); }
    render() {
        return (
            <>
                <h2>Current Time</h2>
                <Clock hrs={this.state.hrs} min={this.state.min} sec={this.state.sec} />
                <p className='clock-digital'>
                    <span>{`${this.state.hrs < 10 ? '0' : ''}${this.state.hrs}`}</span>:
                    <span>{`${this.state.min < 10 ? '0' : ''}${this.state.min}`}</span>:
                    <span>{`${this.state.sec < 10 ? '0' : ''}${this.state.sec}`}</span>
                </p>
            </>
        );
    };
}