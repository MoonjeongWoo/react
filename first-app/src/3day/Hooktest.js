import { useEffect, useState, useRef, useReducer } from "react";
const Hooktest = () => {
  //   let [name, setName] = useState("");
  //   let [password, setPw] = useState("");
  //   let input = useRef(null);
  //   ===========================================================
  //   useEffect(() => {
  //     console.log("update");
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("update2");
  //   }, [name, password]);

  //   useEffect(() => {
  //     console.log("mount");
  //     var time = 0;
  //     setInterval(() => {
  //       console.log(time);
  //       time++;
  //     }, 1000);
  //     console.log(input.current);
  //     return () => {};
  //   });
  // ============================================================
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function reducer(state, action) {
    switch (action.type) {
      case "increament":
        return state + 1;
      case "decreasement":
        return state - 1;
      default:
        return state;
    }
  }
  let [width, setWidth] = useState("");
  let [color, setColor] = useState("");
  let [number, dispatch] = useReducer(reducer, 0);
  let box = useRef(null);
  //   useEffect(() => {
  //     window.addEventListener("resize", () => {
  //       setWidth(window.innerWidth);
  //       setColor(getRandomColor());
  //     });

  //     var time = 0;
  //     setInterval(() => {
  //       console.log(time);
  //       time++;
  //     }, 1000);
  //   });
  return (
    <>
      {/* <input
        ref={input}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <br></br>
      <input
        type="password"
        onChange={(e) => {
          setPw(e.target.value);
        }}
      ></input> */}
      {/* <div ref={box} style={{ backgroundColor: color }}>
        width가 변할 때마다 배경 색상이 바뀌어요.
        <br></br>
        width : {width}
      </div> */}
      <h1>{number}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increament" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decreasement" });
        }}
      >
        -1
      </button>
    </>
  );
};
export default Hooktest;
