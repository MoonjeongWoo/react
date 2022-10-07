import { Component } from "react";
import "./App.css";
class ClassComponent6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "문정우",
      delete: "제명되었습니다",
    };
  }
  //   changered = (e) => {
  //     this.setState({ none: this.state.merong });
  //   };

  //   changeblack = (e) => {
  //     this.setState({ none: this.state.not });
  //   };
  //   asd = (e) => {
  //     this.setState({ hello: this.state.disappear });
  //   };

  changename = (e) => {
    this.setState({
      name: this.state.delete,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.changename}>제명</button>
        {/* <button onClick={this.asd}>슈루루룩!</button>
        <h1>{this.state.hello}</h1> */}
        {/* <h1>{this.state.none}</h1>
        <button onClick={this.changered}>바껴라</button>
        <button onClick={this.changeblack}>안바껴라</button> */}
      </>
    );
  }
}

export default ClassComponent6;
