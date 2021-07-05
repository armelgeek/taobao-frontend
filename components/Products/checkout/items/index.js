import { useSelector } from 'react-redux';

const CheckoutItems = () => {
  const { cartItems } = useSelector(state => state.cart);

  return (
    <ul className="checkout-items">
      {cartItems.map(item => (
        <li className="checkout-item">
          <div className="checkout-item__content">
            <div className="checkout-item__data">
              <h3>{item.name} (X {item.count} )</h3>
              <span>#{item.id}</span>
            </div>
          </div>
          <h3>${item.price}</h3>
        </li>
      ))}
    </ul>
  )
};

  
export default CheckoutItems