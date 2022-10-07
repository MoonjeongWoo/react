import React, { useState } from "react";
const FunctionComponent3 = (props) => {
  // function useState{
  //
  //  return(변수, 함수)
  //}
  //
  let [number, setnumber] = useState(0); //number는 변수, setnumber는 함수, state 변수 사용할수 있는 기능 추가
  const changeNumber = () => {
    setnumber(number + 1);
  }; //함수를 실행시키는 함수 만들기
  return (
    <>
      <h1>{number}</h1>
      <button onClick={changeNumber}>Button</button>
    </>
  );
};

export default FunctionComponent3;
