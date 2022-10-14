import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
function Product() {
  const { id, name } = useParams(); //{id: 1}
  const param = useParams(); // param.id
  //localhost:3000/product/1
  //{id: 1}
  const location = useLocation();
  // console.log(location.search);
  let [serchParams, setSearchParams] = useSearchParams();
  // console.log(serchParams);
  let price = serchParams.get("price");
  let navigate = useNavigate();
  //사용법 -> onclick 후 navigate(-2)
  return (
    <>
      <div style={{ width: "100%", height: "450px" }}>
        <h1>{id}번 상품페이지 입니다</h1>
      </div>
      <button onClick={() => navigate(-1)}>뒤로버튼</button>
      <button onClick={() => navigate(1)}>앞으로 가기 버튼</button>
      <button onClick={() => navigate("/")}>main</button>
    </>
  );
}
export default Product;
