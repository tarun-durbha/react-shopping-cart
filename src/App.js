import data from "./data.json"
import Products from "./components/Products"
import {useState} from "react";
import Filter from "./components/Filter";
const App=()=> {
  const[products,setProducts]=useState(data.products)
  const[size,setSize]=useState("")
  const[sort,setSort]=useState("")
  const sortProducts=(event)=>{
    const sort=event.target.value;
    console.log(event.target.value)
    setSort(event.target.value)
    setProducts(products.slice().sort((a,b)=>
      sort==="lowest"?
      ((a.price>b.price)?1:-1):
      sort==="highest"?
      ((a.price<b.price)?1:-1):
      ((a._id < b._id)?1:-1)

    ))


  }
  const filterProducts=(event)=>{
    console.log(event.target.value)
    if(event.target.value===""){
      setSize(event.target.value);
      setProducts(data.products);
    }
    else{
    setSize(event.target.value)
    setProducts(data.products.filter(product=>product.availableSizes.indexOf(event.target.value)>=0))


    }
    

  }
  return (
  <div className="grid-container">
    <header>
      <a href="/" >react shopping Cart</a>
    </header>
    <main>
      <div className="content">
        <div className="main">
          <Filter count={products.length}
          size={size}
          sort={sort}
          filterProducts={filterProducts}
          sortProducts={sortProducts}></Filter>

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
