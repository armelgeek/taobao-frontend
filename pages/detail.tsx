import {useState,useEffect} from "react"
import { useRouter } from "next/router"

const Detail = () => {
	const [data,setData] = useState([])
  	const router = useRouter()
  	const {
    query: { id },
  	} = router;
  /*	useEffect(async ()=>{
  		await fetch("https://taobao-tmall-data-service.p.rapidapi.com/Item/ItemGet.ashx?num_iid="+id, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1e42f1039emsh7c0f4db85c95b0bp1307a1jsn918337a4377e",
			"x-rapidapi-host": "taobao-tmall-data-service.p.rapidapi.com",
			"useQueryString": true
		}
	})
.then(response => {
	setData(response);
})
.catch(err => {
	console.error(err);
});
  	},[id])*/
	return (
		<>
          <div>
          	
          	<section className="section-content bg-white padding-y">
<div className="container">
	<div className="row">
		<aside className="col-md-6">
<div className="card">
<article className="gallery-wrap"> 
	<div className="img-big-wrap">
	  <div> <a href="#"><img src="images/items/15.jpg"/></a></div>
	</div>
</article>
</div>
		</aside>
		<main className="col-md-6">
<article className="product-info-aside">

<h2 className="title mt-3">Hot sale unisex New Design Shoe </h2>


<div className="mb-3"> 
	<var className="price h4">USD 465,00</var> 
</div> 

<p>Compact sport shoe for running, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat </p>


	<div className="form-row  mt-4">
		<div className="form-group col-md flex-grow-0">
			<div className="input-group mb-3 input-spinner">
			  <div className="input-group-prepend">
			    <button className="btn btn-light" type="button" id="button-plus"> + </button>
			  </div>
			  <input type="text" className="form-control" value="1"/>
			  <div className="input-group-append">
			    <button className="btn btn-light" type="button" id="button-minus"> &minus; </button>
			  </div>
			</div>
		</div>
		<div className="form-group col-md">
			<a href="#"  className="btn  btn-primary"> 
				<i className="fas fa-shopping-cart"></i> <span className="text">Add to cart</span> 
			</a>
			
		</div>
	</div>

</article>
		</main> 
	</div>
</div> 
</section>
<section className="section-name padding-y bg">
<div className="container">

<div className="row">
	<div className="col-md-12">
		<h5 className="title-description">Description</h5>
		<p>
			Lava stone grill, suitable for natural gas, with cast-iron cooking grid, piezo ignition, stainless steel burners, water tank, and thermocouple. Thermostatic adjustable per zone. Comes complete with lava rocks. Adjustable legs. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. 
		</p>
		<ul className="list-check">
		<li>Material: Stainless steel</li>
		<li>Weight: 82kg</li>
		<li>built-in drip tray</li>
		<li>Open base for pots and pans</li>
		<li>On request available in propane execution</li>
		</ul>
	</div> 
</div>

</div> 
</section>
          </div>
        </>)
}

export default Detail;