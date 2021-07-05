import {useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
const Translate = ({text}) => {
  const [textTraduit,setTextTraduit] = useState(text)
  const [loading,setLoading]= useState(false)
  useEffect(async ()=>{
       setLoading(true);
        const formData = new URLSearchParams();
        formData.append("text",text);
        let response = await fetch(`${process.env.NEXT_PUBLIC_API}/translate`, {
          method: "POST",
          headers: {
          "content-type": "application/x-www-form-urlencoded",
          },
          body:formData
        })
     
     response = await response.json()
     setLoading(false);
     setTextTraduit(response.traduction)  
  },[text])
  return (

    <>
        { loading ? <Skeleton/>  : textTraduit}
    </>
  )
}
export default Translate
