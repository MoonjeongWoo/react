import React, { Component } from "react";

class reftest2 extends Component {
  bbb = () => {
    console.log(this.box);
  };

  render() {
    return (
      <>
        <div
          ref={(ref) => {
            this.box = ref;
          }}
          style={{ width: "250px", height: "250px", backgroundColor: "red" }}
        ></div>
        <button onClick={this.bbb}></button>
      </>
    );
  }
}
export default reftest2;
