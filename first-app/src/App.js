// import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import Event_Ex from "./ex/Event_ex";
import HAHAHA from "./hahaha";
function App() {
  // let list = ["a", "b", "c", "d", "e"];

  // let listTemp = [
  //   { id: 1, value: "a" },
  //   { id: 2, value: "b" },
  //   { id: 3, value: "c" },
  //   { id: 4, value: "d" },
  //   { id: 5, value: "e" },
  // ];

  // let [list, setList] = useState(listTemp);
  // let [inputValue, setInput] = useState("");
  // let [inputId, setInputid] = useState(list.length + 1);
  // //map 은 배열 조작하는애 (조작 하려면 접근 방식 알아야 함)

  // let animals = ["dog", "cat", "owl", "tiger"];
  // let newAnimals = animals.filter((animal) => {
  //   return animals !== "dog";
  // });

  return (
    <>
      {/* <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let newList = list.concat({ id: inputId, value: inputValue }); //concat 추가 해주는 값 인자 받기
          setList(newList);
          setInputid(inputId + 1);
          setInput("");
        }}
      >
        add
      </button>
      {list.map((value) => {
        return (
          <div
            key={value.id}
            onDoubleClick={(e) => {
              let newNew = list.filter((value2) => {
                return value2.id !== value.id;
              });
              setList(newNew);
            }}
          >
            {value.id},{value.value}
          </div>
        );
      })} */}
      {/* <Event_Ex></Event_Ex> */}
      <HAHAHA></HAHAHA>
    </>
  );
}

export default App;
