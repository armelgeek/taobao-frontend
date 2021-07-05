import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/Products/checkout-status';
import CheckoutItems from '../../components/Products/checkout/items';

const CheckoutPage = () => {

  const livraisonPay = 2000;
  const priceTotal = useSelector((state:any) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map((item:any) => totalPrice += item.price * item.count);
    }
    totalPrice += livraisonPay;
    return totalPrice;
  })

  return (
    <>
      <div className="flex flex-row justify-between w-100">
          <div className="">
              <h3>Livraison</h3>
              <p>Nom</p>
              <input type="text" name="first_name" id="first_name" value="" className="form-control"></input>
              <label>Téléphone&nbsp;<span className="text-danger">*</span></label>
              <input type="text" name="first_name" id="first_name" value="" className="form-control"></input>
              <label>Adresse&nbsp;<span className="text-danger">*</span></label>
              <input type="text" name="address" id="address" value="" className="form-control"/>
              Zone de livraison
              <label className="custom-control-label cpointer">Antananarivo</label>
              <label>Quartier&nbsp;<span className="text-danger">*</span></label>
              <p>Email</p>
              <input type="text" name="email" id="email" value="" className="form-control"></input>
              <p>Note de commande</p>
              <input type="text" name="note" id="note" value="" className="form-control"></input>
          </div>
          <div className="">

          </div>
      </div>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Shipping and Payment</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="flex flex-row ">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">Sign up</button>
              </div>
            </div>
            
            <div className="checkout__col-4">
              <div className="block">
                <h3 className="block__title">Methode de payement</h3>
                <p>
                <input type="checkbox" name="methodPay"  /> MVola(Payer avec MVola)
                <br />
                <input type="checkbox" name="methodPay"  />Orange Moneny(Payer avec Orange Money)
                </p>
                
              </div>
              
              <div className="block">
                <h3 className="block__title">Livraison</h3>
                <p>{livraisonPay}</p>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Votre commande</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>Total cost</p>
                  <h3>${priceTotal}</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i>Revenir en arriere</a>
            <div className="cart-actions__items-wrapper">
              <a className="btn btn--rounded btn--border" href="/products">Continue shopping</a>
              <a  className="btn btn--rounded btn--yellow" href="/payment">Proceed to payment</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

  
export default CheckoutPage