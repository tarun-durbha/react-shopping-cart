import React from 'react';
import formatCurrency from '../util';
import Fade from "react-reveal/Fade;"
import Modal from "react-modal";
import {useState} from "react";
import Zoom from "react-reveal/Zoom"

export default function Products({products,addToCart}) {
    const[product,setProduct]=useState(null)
    const openModal=(product)=>{
        setProduct(product)

    };
    const closeModal=()=>{
        setProduct(null)
    }
  return (
    <div>
        <Fade bottom cascade={true}>
        <ul className='products'>
            {products.map(product=>{
                return(
                    <li key={product._id}>
                    <div className='product'>
                        <a href={"#"+product._id}
                        onClick={()=>openModal(product)}>
                            <img src={product.image} alt="product.title"></img>
                            <p>
                                {product.title}
                            </p>
                        </a>
                        <div className='product-price'>
                             {formatCurrency(product.price)}
                        </div>
                        <button onClick={(e)=>addToCart(product)} className='button primary'>
                            Add To Cart
                        </button>
                    </div>
                </li>
                )
               
            })}

        </ul>
        </Fade>
        {
            product &&(
                <Modal isOpen={true}>
                    onRequestClose={closeModal}
                    <Zoom>
                        <button className='close-modal' onClick={closeModal}>

                        </button>
                        <div className='product-details'>
                            <img src={product.image} alt={product.title}>

                            </img>
                            <div className="product-details-description">
                                <p>
                                    <strong>
                                      {product.title}
                                    </strong>
                                </p>
                                <p>
                                    <strong>
                                      {product.description}
                                    </strong>
                                </p>
                                <p>
                                    Available Sizes:{" "}
                                    {
                                        product.availableSizes.map(x=>(
                                            <span>
                                                {""}
                                                <button className="button">
                                                    {x}

                                                </button>
                                            </span>
                                        ))
                                    }
                                </p>
                                <div
                                className='product-price'>
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className='button-primary' onClick={()=>{
                                        addToCart(product)
                                        closeModal();
                                    }}>
                                    Add To Cart
                                    </button>
                                </div>

                            </div>

                        </div>

                    </Zoom>

                </Modal>
            )
        }
        

    </div>
  )
}
