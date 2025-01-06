import logo from "./logo.svg";
import "./App.css";
import Avatar from "./component/Avatar";
import New from "./component/buoi_3/New";
import BlogItem from "./component/buoi_3/BlogItem";
import ChuThich from "./component/buoi_3/btvn";
import DemoChildren from "./component/buoi_4/DemoChildren";
import DemoFunctionChild from "./component/buoi_4/DemoFunctionChild";
import ProductItem from "./component/buoi_3/btvn";

const URL1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwnnhdasw6XLDIkNIzbDgUDdZgecfh_pICg&s";
const DECS =
  "Những biểu tượng đặc biệt là văn bản thực tế và có sẵn để sao chép và dán vào bất cứ nơi nào";
//alt + shift + 0

//title,description

const blog1 = {
  title: "An ninh mang",
  description: DECS,
};
const blog2 = {
  title: "Chinh tri gia",
  description: DECS,
};
const blog3 = {
  title: "Phap lua va doi song",
  description: DECS,
};
const blog4 = {
  title: "Xa hoi",
  description: DECS,
};
const URL = "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png";
const products = [
  {
    img: "",
    title: "Iphone 14 Pro max",
    description: "Giảm ngay 1,400,000đ áp dụng đến 06/01",
    price: "26,000,000đ"
  },
  {
    img: URL,
    title: "Iphone 15 Pro max",
    description: "Giảm ngay 1,400,000đ áp dụng đến 06/01",
    price: "26,000,000đ"
  },
  {
    img: URL,
    title: "Iphone 16 Pro max",
    description: "Giảm ngay 1,400,000đ áp dụng đến 06/01",
    price: "26,000,000đ"
  },
]

function App() {
  const renderProducts = () => (products.map((item) => {
    return <ProductItem product={item}/>
  }))
  return (
    <div className="App">
      <Avatar link={URL1} alt="Anh so 1" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ul>
        <New title="UL/UX Desgin" icon="❧" description={DECS} />
        <New title="UL/UX Desgin" icon="⌨︎" description={DECS} />
        <New title="UL/UX Desgin" icon="✉" description={DECS} />
        <New title="UL/UX Desgin" icon="❧" description={DECS} />
        <New title="UL/UX Desgin" icon="❧" description={DECS} />
        <New title="UL/UX Desgin" icon="❧" description={DECS} />
      </ul>

      <BlogItem blog={blog1} />
      <BlogItem blog={ blog2} />
      <BlogItem blog={blog3} />
      <BlogItem blog={blog4} />

      <img src="" alt hello="123" />
      <div style={{ display: "flex", gap: "10px" }}>
        {renderProducts()}
      </div>

      <div>
        <DemoChildren>
          <h1>Hello Word</h1>
          <h1>Green Academy</h1>
        </DemoChildren>
        <DemoFunctionChild>
          {()=><h1>Hello Word Function</h1>}
        </DemoFunctionChild>
      </div>
    </div>
  );
}

export default App;
