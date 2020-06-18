import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import Item from './Item';


const Market = inject('inventory')(observer((props) => {
    const [input, setInput] = useState('')

    const addItem = () => {
        props.inventory.addItem(input)
        setInput('')
    }

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />Enter the new item
            <button onClick={addItem}>add</button>
            <p>{props.inventory.numItems}</p>
            {props.inventory.items.map((item, i) => <Item key={i} item={item} />)}
        </div>
    )

}))

export default Market
