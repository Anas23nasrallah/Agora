import React from 'react';
import { observer, inject } from 'mobx-react'

const Item = inject('inventory')(observer((props) => {

    const item = props.item

    const changeprice = () => {
        const newPrice = prompt('Enter the new price')
        props.inventory.changePrice(item.name, newPrice)
    }

    return (
       <li onDoubleClick={changeprice}>
           {item.quantity } { item.name} available at {item.price} &#8362; per item
           <button onClick={()=>props.inventory.buyItem(item.name)} >Buy</button>
       </li>
    )
 }))

 export default Item;
