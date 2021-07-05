import { useSelector } from 'react-redux';
import CheckoutStatus from '../checkout-status';
import Item from './item';

const ShoppingCart = () => {
  const { cartItems } = useSelector(state => state.cart);

  const priceTotal = useSelector(state => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }
    return totalPrice;
  })

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th style={{textAlign: 'left'}}>Product</th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table> 
          } 
          
          {cartItems.length === 0 && 
            <p>Nothing in the cart</p>
          }
        </div>
      
        <div className="cart-actions">
          <a href="/products" className="cart__btn-back"><i className="icon-left"></i> Continuer le shopping</a>
         
          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">Total cost <strong>${priceTotal.toFixed(2)}</strong></p>
            <a href="/cart/checkout" className="btn btn--rounded btn--yellow">Checkout</a>
          </div>
        </div>
      </div>
    </section>
  )
};

  
export default ShoppingCart