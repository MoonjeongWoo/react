import { Component } from "react";
import PropTypes from "prop-types";
// import { title } from "process";
class ClassComponent2 extends Component {
  static defaultProps = {
    text: "이건 기본 text 입니다",
  };
  static propTypes = {
    text: PropTypes.string,
  };
  render() {
    function valid() {
      console.log("콘솔 띄우기 성공");
    }
    return (
      <>
        <div>{this.props.text}</div>
        <button onClick={valid}>콘솔메세지</button>
      </>
    );
  }
}
export default ClassComponent2;
