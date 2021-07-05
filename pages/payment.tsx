import { useSelector } from 'react-redux';
export default function payment() {   
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

        <div>
            Total à payer : {priceTotal} Ar
        </div>
    )
}
