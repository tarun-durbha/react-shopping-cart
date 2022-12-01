import data from "./data.json"
import Products from "./components/Products"
import {useState} from "react";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
const App=()=> {
  const[products,setProducts]=useState(data.products)
  const[size,setSize]=useState("")
  const[sort,setSort]=useState("")
  const[cartItems,setCartItems]=useState([])
  if(localStorage.getItem("cartItems")){
    setCartItems(JSON.parse(localStorage.getItem("cartItems")))
    
  }
  const createOrder=(order)=>{
    alert("New to save order for"+order.name)
  }
  
  const removeFromCart=(product)=>{
    const cartItems=cartItems.slice();
    setCartItems( cartItems.filter(x=>x._id!==product._id))
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x._id!==product._id)));
   

  }
  const addToCart=(product)=>{
    // console.log(cartItems)
    const cartItems=cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach(item => {
      if(item._id===product._id){
        item.count++;
        alreadyInCart=true;

        
      }
      
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1})
     
       
    }
   
    

  }
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

          <Products products={products} addToCart={addToCart}></Products>
        </div>
        <div className="sidebar">
          <Cart cartItems={cartItems} 
          removeFromCart={removeFromCart}
          createOrder={createOrder}/>
        </div>
      </div>
    </main>
    <footer>
      All right reserved
    </footer>

  </div>
  );
}

export default App;
