function Food(props) {
  return (
    <>
      <div>
        아 나는 <span style={{ color: "red" }}>{props.name}</span> 를 좋아합니다
      </div>
    </>
  );
}
Food.defaultProps = {
  name: "불고기",
};

export default Food;
