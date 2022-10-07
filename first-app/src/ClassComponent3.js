import { Component } from "react";

class ClassComponent3 extends Component {
  //   constructor(props) {
  //     super(props); // super함수는 부모 클래스의 생성자 실행

  //     this.state = {//this.state 하는 법
  //       number: 0,
  //       name: "문정우",
  //       text: "안녕하세요",
  //     };
  //   }
  //==========================================================

  state = {
    number: 0,
    text: "안녕하세요",
  };
  //유동적인 데이터를 다루기 위해 state가 변경되면 재렌더링됌
  render() {
    // let { number, text } = this.state; //this.state 하는법2
    const { number, text } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <div>{text}</div>
        <button
          onClick={() => {
            this.setState((prev) => {
              return { number: prev.number + 1 };
            });
            this.setState((prev) => ({ number: prev.number + 1 }));
            // this.setState({ number: number + 1, text: "만나서 반갑습니다" });
          }}
        >
          안녕하세요
        </button>
      </>
    );
  }
}

export default ClassComponent3;
