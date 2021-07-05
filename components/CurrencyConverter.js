import {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
const CurrencyConverter = ({money}) => {

  const currencyFormat = (num) => {
    if(num){
       return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '1 ') + ' MGA'
    }
   
  }
  const [moneyConvert,setMoneyConvert] = useState(money)
  const [loading,setLoading]= useState(false)
  let total = 0;
  useEffect(async ()=>{
       setLoading(true);
        const formData = new URLSearchParams();
        formData.append("money",money);
        let response = await fetch(`${process.env.NEXT_PUBLIC_API}/currency-convert`, {
          method: "POST",
          headers: {
          "content-type": "application/x-www-form-urlencoded",
          },
          body:formData
        })
     response = await response.json();
     setMoneyConvert(currencyFormat(response.YenToAriary));  
     setLoading(false);

  },[money])
  return (

    <>
        { loading ? <Skeleton/>  : moneyConvert}
    </>
  )
}
export default CurrencyConverter
