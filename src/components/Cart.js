import React from 'react'
import formatCurrency from '../util'
import { useState } from 'react'
import Fade from 'react-reveal/Fade'

export default function Cart(props) {
    const[showCheckout,setShowCheckout]=useState(false)
    const {cartItems}=props
    const[value,setValue]=useState({
        name:"",
        email:"",
        address:"",
        showCheckout:false
    })
    console.log(props.cartItems)
    const handleInput=(e)=>{
        setValue({[e.target.name]:e.target.value})

    }
    const createOrder=(e)=>{
        e.preventDefault();
        const order={
            name:value.name,
            email:value.email,
            address:value.address,
            cartItems:value.cartItems,
        }
        props.createOrder(order);

    }

    
  return (<React.Fragment>
     <div>
        {cartItems.length===0?(<div className="cart cart-header">Cart is empty</div>)
        :(<div className="cart cart-header">you have {cartItems.length}in the cart{" "}</div>)}

    </div>
    <div className="cart">
        <Fade left cascade={true}>
        <ul className="cart-items">
            {cartItems.map(item=>{
                return(
                    <li key={item._id}>
                        <div>
                            <img src={item.image} alt={item.title}></img>
                        </div>
                        <div>
                            <div>{item.title}</div>
                            <div className='right'>
                                {formatCurrency(item.price)} x {item.count}{" "}
                            <button className="button" onClick={()=>props.removeFromCart(item)}>Remove</button>
                            </div>
                            
                        </div>

                    </li>

            )})}

        </ul>

        </Fade>

    </div>
    {cartItems.length!==0 &&(
        <div>
             <div className='cart'>
         <div className='total'>
             <div>
                 Total:{ " "}
                 {formatCurrency(cartItems.reduce((a,c)=>
                     a+(c.price * c.count),0)
 
                 )}
             </div>
             <button onClick={()=>setShowCheckout(true)} className="button primary">Proceed</button>
 
         </div>
 
     </div>
     {showCheckout&&(
        <Fade right cascade={true}>
             <div className='cart'>
        <form onsubmit={createOrder}>
            <ul className="form-container">
                <li>
                    <label>Email</label>
                    <input 
                    name="email"
                    type="email"
                     required onChange={handleInput}
                     ></input>
                </li>
                <li>
                    <label>Name</label>
                    <input
                    name="name"
                     type="text"
                     required onChange={handleInput}
                     ></input>
                </li>
                <li>
                    <label>Address</label>
                    <input
                    name="address"
                     type="text"
                     required onChange={handleInput}
                     ></input>
                </li>
                <li>
                    <button className="button primary " type="submit">Checkout</button>
                </li>

            </ul>

        </form>
        </div>

        </Fade>
       
     )}


        </div>
        
    )}
   

  </React.Fragment>

   
  )
}
