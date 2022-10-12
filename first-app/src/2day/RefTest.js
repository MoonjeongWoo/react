import React, { Component } from "react";

class RefTest extends Component {
  // 클래서 컴포넌트에서 ref2가지 방법
  // 처음은 ref내에서 props 선언

  componentDidMount() {}
  aaa = () => {
    this.box.scrollTop = this.box.scrollHeight;
    console.log(this.box);
    // console.log(this.box2.current); //current 까지 사용 해야지 DOM 요소 불러온당
  };

  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
          style={{ width: "250px", height: "250px", overflow: "scroll" }}
        >
          box
          <div
            ref={(ref) => {
              this.box2 = ref;
            }}
            style={{ width: "250px", height: "1000px", backgroundColor: "red" }}
          ></div>
        </div>

        <button onClick={this.aaa}>버튼</button>
      </>
    );
  }
}
export default RefTest;
