// import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  // let list = ["a", "b", "c", "d", "e"];

  let listTemp = [
    { id: 1, value: "a" },
    { id: 2, value: "b" },
    { id: 3, value: "c" },
    { id: 4, value: "d" },
    { id: 5, value: "e" },
  ];

  let [list, setList] = useState(listTemp);
  let [inputValue, setInput] = useState("");
  //map 은 배열 조작하는애 (조작 하려면 접근 방식 알아야 함)

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let newList = list.concat({ id: list.length + 1, value: inputValue }); //concat 추가 해주는 값 인자 받기
          setList(newList);
          setInput("");
        }}
      >
        add
      </button>
      {list.map((value) => {
        return (
          <div key={value.id}>
            {value.id},{value.value}
          </div>
        );
      })}
    </>
  );
}

export default App;
