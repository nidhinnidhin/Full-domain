import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([]);
  // const [totalPrice, setTotalPrice] = (0)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((data) => {
      setProducts(data.data.products)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  console.log(products)

  let total = 0;

  function addTotal(price){
    setTotalPrice(price)
  }


  return (
    <div>
      <h1>Total - {totalPrice}</h1>
        {
          products.map((d) => (
            <ol>
              <li>{d.title} - {d.price}  <button onClick={() => addTotal(d.price)}>Add</button></li>
            </ol>
          ))
        }
    </div>
  )
}

export default Products