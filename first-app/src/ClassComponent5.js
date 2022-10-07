import { Component } from "react";

class ClassComponent5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };

    // this.changenumber = this.changenumber.bind(this);
  }

  changenumber = () => {
    this.setState({ number: this.state.number + 1 });
  };
  decreasenumber = () => {
    this.setState({ number: this.state.number - 1 });
  };

  //   consolelog = (name) => {
  //     console.log(name, "안녕");
  //   };

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.changenumber}>버튼 +1</button>
        <button onClick={this.decreasenumber}>버튼 -1</button>
      </>
    );
  }
}
export default ClassComponent5;
