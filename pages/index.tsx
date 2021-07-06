import Head from 'next/head'
import Image from 'next/image'
import React, { useState,useEffect,useRef } from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/Header/index'
import FileUpload from '../components/FileUpload';
import Link from "next/link"
import Skeleton from 'react-loading-skeleton'
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
  const inputRef = useRef();
  const  getParameterByName =(name, url)=> {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
  const [search, setSearch] = useState([])
  const [categories, setCategories] = useState(null)
  const [loadingCategory, setLoadingCategory] = useState(false)
 
  const onChange =() =>{
    let url = inputRef.current.value;
    let id = getParameterByName('id',url);
    setSearch(id);
  }
  useEffect(async ()=>{
     setLoadingCategory(true);
    await fetch(`${process.env.NEXT_PUBLIC_API}/category`, {
    "method": "GET"
  }).then(response => {
      setLoadingCategory(false);
    console.log(response);
    setCategories(response.json());
  }).catch(err => {
  setLoadingCategory(false);
  console.error(err);
    });
    },[])
  return (
    <>
      <Head>
        <title>Accueil</title>
      </Head>
<section class="section-main padding-y">
<main class="card">
  <div class="card-body">

<div class="row">
  <aside class="col-lg col-md-3 flex-lg-grow-0">
    <nav class="nav-home-aside">
      <h6 class="title-category">Categories<i class="d-md-none icon fa fa-chevron-down"></i></h6>
      <ul class="menu-category">
      
      {!loadingCategory ? 
       <> </>
       :
        <>
          <li>
            <a href="#"><Skeleton /></a>
          </li>
          <li>
            <a href="#"><Skeleton /></a>
          </li>
          <li>
            <a href="#"><Skeleton /></a>
          </li>
          <li>
            <a href="#"><Skeleton /></a>
          </li>
          <li>
            <a href="#"><Skeleton /></a>
          </li>
          </>
     }
      </ul>
    </nav>
  </aside>
  <div class="col-md-9 col-xl-7 col-lg-7">
 <div style={{ display: 'block'}}>
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="https://gw.alicdn.com/imgextra/i1/O1CN016q4k5T1IPNCZM2RTx_!!6000000000885-0-tps-640-260.jpg_Q75.jpg"
            alt="Image One"
          />
          
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
src="https://gw.alicdn.com/imgextra/i1/O1CN016q4k5T1IPNCZM2RTx_!!6000000000885-0-tps-640-260.jpg_Q75.jpg"
            alt="Image Two"
          />
         
        </Carousel.Item>
      </Carousel>
    </div>
  </div> 
  <div class="col-md d-none d-lg-block flex-grow-1">
    <aside class="special-home-right">
      <h6 class="bg-blue text-center text-white mb-0 p-2">Service exclusif aux membres 
</h6>
      
      <div class="card-banner border-bottom">
        <div class="py-3">
          <p >Prend en charge tous type de paiment par mobile money</p>
        </div> 
        <img src="//gw.alicdn.com/imgextra/i2/O1CN01if50d91MCmmG0Sbph_!!6000000001399-2-tps-64-64.png" class="img-bg rounded-pill border-secondary" height="50"/>
      </div>

      <div class="card-banner border-bottom">
        <div class="py-3" >
          <p >Livraison un peu partout à Antananarivo</p>
        </div> 
        <img src="//gw.alicdn.com/imgextra/i1/O1CN01OlW1y01FJTFL78sEg_!!6000000000466-2-tps-64-64.png" class="img-bg rounded-pill border-secondary" height="50"/>
      </div>

      <div class="card-banner border-bottom">
        <div class="py-3" >
          <p >Protection de l'acheteur et achats sans souci</p>
        </div> 
        <img src="//gw.alicdn.com/imgextra/i3/O1CN01ZBHPjX1S1gsTTe9OR_!!6000000002187-2-tps-64-64.png" class="img-bg rounded-pill border-secondary" height="50"/>
      </div>

    </aside>
  </div>
</div> 
</div>
</main> 

</section>


<section className="padding-bottom">
 <div className="card">
     <div className="col-heading content-body">
      <header className="section-heading">
       <h3 className="section-title">Tu pourrais aussi aimer</h3>
     </header>
   </div>
   <div className="row no-gutters items-wrap">
    <div className="col-md col-6">
     <figure className="card-product-grid card-sm">
      <a href="#" className="img-wrap"> 
       <img src="images/items/3.jpg"/> 
      </a>
      <div className="text-wrap p-3">
        <a href="#" className="title">Summer clothes</a>
        <span className="badge badge-danger"> -20% </span>
      </div>
   </figure>
 </div> 
 <div className="col-md col-6">
   <figure className="card-product-grid card-sm">
    <a href="#" className="img-wrap"> 
     <img src="images/items/4.jpg"/> 
   </a>
   <div className="text-wrap p-3">
     <a href="#" className="title">Some category</a>
     <span className="badge badge-danger"> -5% </span>
   </div>
 </figure>
</div> 
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/5.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" class="title">Another category</a>
   <span className="badge badge-danger"> -20% </span>
 </div>
</figure>
</div>
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/6.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" className="title">Home apparel</a>
   <span className="badge badge-danger"> -15% </span>
 </div>
</figure>
</div>
<div className="col-md col-6">
 <figure className="card-product-grid card-sm">
  <a href="#" className="img-wrap"> 
   <img src="images/items/7.jpg"/> 
 </a>
 <div className="text-wrap p-3">
   <a href="#" className="title text-truncate">Smart watches</a>
   <span className="badge badge-danger"> -10% </span>
 </div>
</figure>
</div> 
</div>
</div>

</section>
<section className="padding-bottom">
<header className="section-heading heading-line">
  <h4 className="title-section text-uppercase">Apparel</h4>
</header>

<div className="card card-home-category">
<div className="row no-gutters">
  <div className="col-md-3">
  
  <div className="home-category-banner bg-light-orange">
    <h5 className="title">Best trending clothes only for summer</h5>
    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" className="btn btn-outline-primary rounded-pill">Source now</a>
    <img src="images/items/2.jpg" className="img-bg"/>
  </div>

  </div>
  <div className="col-md-9">
<ul className="row no-gutters bordered-cols">
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Well made women clothes with trending collection  </h6>
    <img className="img-sm float-right" src="images/items/1.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Great clothes with trending collection  </h6>
    <img className="img-sm float-right" src="images/items/2.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Beijing, China</p>
  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Demo clothes with sample collection  </h6>
    <img className="img-sm float-right" src="images/items/3.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Home and kitchen electronic  stuff collection  </h6>
    <img className="img-sm float-right" src="images/items/4.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
  </div>
</a>  
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Home and kitchen electronic  stuff collection  </h6>
    <img className="img-sm float-right" src="images/items/5.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> London, Britain</p>
  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Home and kitchen electronic  stuff collection  </h6>
    <img className="img-sm float-right" src="images/items/6.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Well made clothes with trending collection </h6>
    <img className="img-sm float-right" src="images/items/7.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Hong Kong, China</p>

  </div>
</a>
  </li>
  <li className="col-6 col-lg-3 col-md-4">
<a href="#" className="item"> 
  <div className="card-body">
    <h6 className="title">Home and kitchen interior  stuff collection   </h6>
    <img className="img-sm float-right" src="images/items/6.jpg"/> 
    <p className="text-muted"><i className="fa fa-map-marker-alt"></i> Guanjou, China</p>
  </div>
</a>
  </li>
</ul>
  </div> 
</div>
</div> 
</section>

<section className="padding-bottom-sm">

<header className="section-heading heading-line">
  <h4 className="title-section text-uppercase">Recommended items</h4>
</header>

<div className="row row-sm">
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/1.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div>
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/2.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Some item name here</a>
        <div className="price mt-1">$280.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/3.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Great product name here</a>
        <div className="price mt-1">$56.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/4.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/5.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div>
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/6.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Some item name here</a>
        <div className="price mt-1">$280.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/7.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Great product name here</a>
        <div className="price mt-1">$56.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/9.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/4.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div> 
      </figcaption>
    </div>
  </div> 
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/5.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Just another product name</a>
        <div className="price mt-1">$179.00</div> 
      </figcaption>
    </div>
  </div>
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/6.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Some item name here</a>
        <div className="price mt-1">$280.00</div> 
      </figcaption>
    </div>
  </div>
  <div className="col-xl-2 col-lg-3 col-md-4 col-6">
    <div className="card card-sm card-product-grid">
      <a href="#" className="img-wrap"> <img src="images/items/7.jpg"/> </a>
      <figcaption className="info-wrap">
        <a href="#" className="title">Great product name here</a>
        <div className="price mt-1">$56.00</div> 
      </figcaption>
    </div>
  </div> 
</div>
</section>

      <div id="form">
         <input type="text" required  ref={inputRef} onChange={onChange}/>
         <Link
            href={{
              pathname: "/detail",
              query: { id: search },
        }} >
        <a>Rechercher</a>
        </Link>
        {search}
      </div>

    </>

  )
}
