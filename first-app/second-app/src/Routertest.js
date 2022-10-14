import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Main from "./Main";
import Footer from "./Footer";

function Routertest() {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: "skyblue",
          width: "100%",
          height: "100px",
          textAlign: "center",
        }}
      >
        <Link to="/" style={{ margin: "0px 20px" }}>
          메인
        </Link>
        <Link to="product/1" style={{ margin: "0px 20px" }}>
          1번 상품
        </Link>
        <Link to="product/2" style={{ margin: "0px 20px" }}>
          2번 상품
        </Link>
        <Link to="product/3" style={{ margin: "0px 20px" }}>
          3번 상품
        </Link>
      </div>
      {/* 얘들은 Routes 태그 안에 들어가면 안됌*/}
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/product/:id" element={<Product></Product>}></Route>
        {/* localhost: 3000/product*/}
      </Routes>
      <div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}
export default Routertest;
