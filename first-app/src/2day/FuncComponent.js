function FuncComponent(props) {
  let { title } = props;
  return (
    <>
      <div>안녕{props.title}</div>
      <div>{props.name}</div>
      <div>{props.children}헬로</div>
    </>
  );
}

export default FuncComponent;
