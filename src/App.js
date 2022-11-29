import data from "./data.json"
import Products from "./components/Products"
import {useState} from "react"
const App=()=> {
  const[products,setProducts]=useState(data.products)
  const[size,setSize]=useState("")
  const[sort,setSort]=useState("")
  return (
  <div className="grid-container">
    <header>
      <a href="/" >react shopping Cart</a>
    </header>
    <main>
      <div className="content">
        <div className="main">
          <Products products={products}></Products>
        </div>
        <div className="sidebar">Cart</div>
      </div>
    </main>
    <footer>
      All right reserved
    </footer>

  </div>
  );
}

export default App;
