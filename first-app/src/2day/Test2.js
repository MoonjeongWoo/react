import { Component } from "react";
import coding from "./logo.svg";

class Test2 extends Component {
  render() {
    return (
      <>
        <div
          style={{
            fontSize: "40px",
            marginTop: "20px",
            color: "orange",
          }}
        >
          안녕하세요
          <img src={coding}></img>
        </div>
      </>
    );
  }
}
export default Test2;
