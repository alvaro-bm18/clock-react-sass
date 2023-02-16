import React, { Component } from 'react';
import './Clock.scss';
export default class Clock extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="clock-container">
                    {
                        [...new Array(12)].map(
                            (x, hour) =>
                                <div key={`hour-clock-${hour}`} className="hours">
                                    {hour + 1}
                                </div>
                        )
                    }

                    <div className="dot-center"></div>

                    <div
                        className="pointer-minutes"
                        style={{
                            'transform':
                                `rotate(${Number(this.props.min) * (360 / 60) + 180}deg) translate(-50%, 0%)`
                        }}></div>
                    <div
                        className="pointer-hours"
                        style={{
                            'transform':
                                `rotate(${Number(this.props.hrs) * (360 / 12) + 180}deg) translate(-50%, 0%)`
                        }}></div>
                    <div
                        className="pointer-seconds"
                        style={{
                            'transform':
                                `rotate(${Number(this.props.sec) * (360 / 60) + 180}deg) translate(-50%, 0%)`
                        }}></div>
                </div>
            </>
        );
    };
}