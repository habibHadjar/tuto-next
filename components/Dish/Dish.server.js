import React from 'react'

const Dish = (props) => {
    const ingredientsList = props.ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    let newSticker, soldOutSticker
    props.isNew ? newSticker = <span><strong style={{ fontSize: '0.8rem', color: 'blue' }}>new</strong></span> : null
    props.isSold ? soldOutSticker = <span><em style={{ color: 'red' }}> - SOLD OUT - </em></span> : null
    return (
        <>
            {newSticker}<li key={props.id}> {props.name} {soldOutSticker}</li>
            <ul>
                {ingredientsList}
            </ul>
        </>
    )
}

export default Dish
