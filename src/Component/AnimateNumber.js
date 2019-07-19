import React, { Component } from "react";
// https://github.com/chenqingspring/react-animate-number
class AnimateNumber extends Component {
  state = {
    start: 0,
    number: this.props.number,
    speed: this.props.speed
  };

  // componentDidMount() {
  //     var { number, speed } = this.props;
  //     number && this.animate(number, speed);
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  animate = (number, start, speed) => {
    if (start < number) {
      var interval = setInterval(function() {
        if (start >= number) {
          clearInterval(interval);
          return;
        }
        return start++;
        console.log(start);
      }, speed);
    }
  };



  render() {
    return (
      <div>
        <p> {this.animateValue(0, 10, 100)}</p>
      </div>
    );
  }
}
export default AnimateNumber;
