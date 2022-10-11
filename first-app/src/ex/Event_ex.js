import { useState } from "react";

function Event_Ex() {
  let inform = [{ name: "문정우", email: "mbh219@naver.com" }];
  let [INFORM, setform] = useState(inform);
  let [inputName, setName] = useState("");
  let [inpurtEmail, setEmail] = useState();
  //   console.log(inform);
  console.log(INFORM);
  console.log(inputName);
  console.log(inpurtEmail);
  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="e-mail"
        placeholder="이메일"
        value={inpurtEmail}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let newinform = INFORM.concat({
            name: inputName,
            email: inpurtEmail,
          });
          setform(newinform);
          setName("");
          setEmail("");
        }}
      >
        등록
      </button>
      {INFORM.map((val) => {
        console.log(val.length);
        return (
          <div>
            <h1
              onDoubleClick={(e) => {
                let newNew = INFORM.filter((val2) => {
                  return val2.name !== val.name;
                });
                setform(newNew);
              }}
            >
              {val.email},{val.name}
            </h1>
          </div>
        );
      })}
    </>
  );
}
export default Event_Ex;
