import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/actions/cartActions';
export default function product({prod}) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const addToCart = () => {
    dispatch(addProduct(
      { 
        id: prod.id,
        name: prod.name,
        price: prod.price,
        count: count,
    }
  ))
}
  return (
    <div>
     {prod.id}
     {prod.name}
      <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
    </div>
  )
}

export async function getServerSideProps({ query }) {

  const id = query.id;
 // const res = await fetch(`${server}/api/product/${pid}`);
 // const product = await res.json();
  const prod ={
    id:id,
    name:"prod name",
    price : 3000,
  }
  return {
    props: {
      prod,
    },
  }
}
