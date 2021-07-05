import React from 'react'
import Link from 'next/link'
import Translate from '../../Translate'
import CurrencyConverter from '../../CurrencyConverter'
export default function ProductItem({ id, name, price, productImage }) {
    return (
        <div>
            <div>{id}</div>
            <Link href={`/product/${id}`}>
                <a><Translate text={name} /></a>
            </Link>
            <div>Money : <CurrencyConverter money={price}/></div>
            <div>{productImage}</div>
        </div>
    )
}
