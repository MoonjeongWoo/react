import { Component } from "react";

class Test extends Component {
  render() {
    let name = "문정우";
    let my_style = {
      backgroundColor: "blue",
      fontSize: "40px",
      padding: "12px",
      color: "orange",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}
export default Test;
