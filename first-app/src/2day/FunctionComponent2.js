// import Proptypes from "prop-types";
import "./App.css";
import picture from "./images.jpeg";
function FunctionComponent2(props) {
  props = {
    title: "이번주 베스트셀러",
    sub: "나의 하루는 4시 40분에 시작된다",
    name: "김유진",
    price: 13500,
    tag: "자기계발서",
  };
  return (
    <>
      <div className="background">
        <div className="title">{props.title}</div>
        <div className="picture">
          <img src={picture}></img>
        </div>
        <div className="sub">{props.sub}</div>
        <div className="name">저자:{props.name}</div>
        <div className="price">가격:{props.price}</div>
        <div className="tag">구분: {props.tag}</div>
      </div>
    </>
  );
}

export default FunctionComponent2;
