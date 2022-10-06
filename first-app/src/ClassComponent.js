import { Component } from "react";
import PropTypes from "prop-types";
// import { title } from "process";
class ClassComponent extends Component {
  static defaultProps = {
    title: "기본제목",
    name: "기본 이름",
  };
  static propTypes = {
    title: PropTypes.string,
  };
  render() {
    //this.props = {
    // title: "ccc"
    //}
    // let { title } = this.props;
    return (
      <>
        <div>안녕??</div>
        <div>나는 클래스형 컴포넌트</div>
        {/* <div> 얘는 무조건 class 이름 extends componenet 해줘야함 </div> */}
      </>
    );
  }
}
export default ClassComponent;
