import { Component } from "react";

class Handler extends Component {
  state = {
    default: "Hellow world!",
    chaged: "안녕! 잘가! 고마웠어!",
  };

  change = (e) => {
    this.setState({
      default: this.state.chaged,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.default}</h1>
        <button onClick={this.change}>떠나기</button>
      </>
    );
  }
}
export default Handler;
