import { useState, useEffect } from "react";
import Scrollindicator from "../scroll-indicator";

export default function Loadmore() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count}`
      );
      const result = await data.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProduct([...product, ...result.products]);
        console.log(product);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading...</div>;
  }

function handleClick(event) {
    setCount(count + 20);   
}

  return (
    <>
    <div className=" mt-2 product-container flex flex-wrap justify-center items-center gap-2">
      <Scrollindicator />
      {product &&
        product.length > 0 &&
        product.map((item, index) => (
          <div key={index} className="product-item border-2 border-black p-4">
            <img src={item.thumbnail} alt={item.name} />
            <p className = "text-center">{item.title}</p>
          </div>
        ))}
    </div>
    <button className = "button-click bg-slate-400" onClick={handleClick}>Load more</button>
    </>
  );
}
