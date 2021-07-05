import { useDispatch } from 'react-redux';
import { setCount,removeProduct } from '../../../../store/actions/cartActions';

const ShoppingCart = ({ name, id, count, price }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        id: id
      }
    ))
  }
  const setProductCount = (count) => {
    if(count <= 0) {
      return false;
    }

    dispatch(setCount(
      { 
        id: id,
        count: count,
      }
    ))
  }
  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button>
        </div>
      </td>
      <td>Ar {price}</td>
      <td className="cart-item-cancel"><button className="icon-cancel" onClick={() => removeFromCart()}>X</button></td>
    </tr>
  )
};
export default ShoppingCart