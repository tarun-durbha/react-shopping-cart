import React from 'react';
import formatCurrency from '../util';

export default function Products({products}) {
  return (
    <div>
        <ul className='products'>
            {products.map(product=>{
                return(
                    <li key={product._id}>
                    <div className='product'>
                        <a href={"#"+product._id}>
                            <img src={product.image} alt="product.title"></img>
                            <p>
                                {product.title}
                            </p>
                        </a>
                        <div className='product-price'>
                             {formatCurrency(product.price)}
                        </div>
                        <button className='button primary'>
                            Add To Cart
                        </button>
                    </div>
                </li>
                )
               
            })}

        </ul>

    </div>
  )
}
