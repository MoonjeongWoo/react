import { Component } from "react";

class ClassComponent4 extends Component {
  state = {
    number: 0,
  };
  render() {
    const { number } = this.state;

    return (
      <>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState((prev) => {
              return { number: number + 1 };
            });
          }}
        >
          버튼 +1
        </button>
        <button
          onClick={() => {
            this.setState((prev) => {
              return {
                number: number - 2,
              };
            });
          }}
        >
          버튼 -2
        </button>
      </>
    );
  }
}
export default ClassComponent4;
