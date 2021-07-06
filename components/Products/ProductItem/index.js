import React from 'react'
import Link from 'next/link'
import Translate from '../../Translate'
import CurrencyConverter from '../../CurrencyConverter'
export default function ProductItem({ id, name, price, productImage }) {
    return (
        <>
         <a href="/detail?id=1">
          <figure className="card card-product-grid">
                    <figcaption className="info-wrap">
                    <a href="#" className="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a>
                    <div className="price-wrap">
                        <span className="price">$32.00-$40.00</span> 
                        <small className="text-muted">/per item</small>
                    </div>
                    
                    <p className="mb-2"> 2 Pieces  <small className="text-muted">(Min Order)</small></p>
                    <hr/>
            </figcaption>
        </figure>
        </a>
          {/*  <div>{id}</div>
            <Link href={`/product/${id}`}>
                <a><Translate text={name} /></a>
            </Link>
            <div>Money : <CurrencyConverter money={price}/></div>
            <div>{productImage}</div>*/}
        </>
    )
}
