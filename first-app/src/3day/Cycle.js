import { Component } from "react";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCyclePractice extends Component {
  state = { width: 0 };

  componentDidMount = () => {
    // 작성해주세요. : state의 width 변경 코드
    // 작성해주세요. : window가 resize 될 때마다 state의 width를 setState 하는 코드
    // 힌트: window.addEventListener('resize', )
    // 작성해주세요. : 콘솔에 타이머 코드
    // 힌트: setInterval() 함수 사용
    window.addEventListener("resize", () => {
      this.setState({ width: window.innerWidth });
    });
    var time = 0;
    this.time = setInterval(() => {
      console.log(" 아아 안녕하세요" + time);
      time++;
    }, 1000);
  };

  componentDidUpdate = () => {
    console.log("componentDidUpdate", this.state.width);
    // this.box.style.backgroundColor = getRandomColor();
    // 작성해주세요: 화면 크기가 바뀔 때마다 배경 색생 바꾸는 코드
    // 힌트: ref를 이용하여 div를 담아둔 this.box 이용.
    // 힌트: 위에 만들어둔 getRandomColor 함수 이용.
  };

  componentWillUnmount = () => {
    console.log("componentWillUnmount");
    clearInterval(this.time);
    window.removeEventListener("resize", () => {
      console.log("아차차");
    });
    // 작성해주세요. : 타이머 종료 코드
    // clearInterval();
    // 작성해주세요. : window resize 이벤트 제거 코드
  };

  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
          style={{ backgroundColor: getRandomColor() }}
        >
          width가 변할 때마다 배경 색상이 바뀌어요.
          <br></br>
          width : {this.state.width}
        </div>
      </>
    );
  }
}

export default LifeCyclePractice;
