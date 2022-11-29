import React from 'react'

export default function Filter({count,size,sort,sortProducts,filterProducts}) {
  return (
    <div className='filter'>
        <div className='filter-result'>
            {count} products
        </div>
        <div className='filter-sort'>
            Order { " "}
            <select value={sort} onChange={sortProducts}>
                <option>Latest</option>
                <option value='highest'>Highest</option>
                <option value="lowest">Lowest</option>
            </select>

        </div>
        <div className='filter-size'>
            Filter{ " "}
             <select value={size} onChange={filterProducts}>
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
    </div>
  )
}
