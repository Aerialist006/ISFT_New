import React, { Component } from "react";

class LiveClockUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <p className="font-semibold md:text-2xl lg:text-5xl">
          {this.state.date.toLocaleTimeString("en-GB")}
        </p>
        <h2 className="capitalize text-gray-500 md:text-sm lg:text-xl font-semibold">
          {this.state.date.toLocaleDateString("es-SD", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </h2>
      </div>
    );
  }
}

export default LiveClockUpdate;
