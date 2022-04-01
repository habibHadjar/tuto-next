import React from 'react'

const Dish = (props) => {
  const ingredientsList = props.ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>
  })

  const newStickerStyle = { fontSize: '0.8rem', color: 'blue' }
  const soldOutStickerStyle = { color: 'red' }

  let newSticker, soldOutSticker

  if (props.isNew) {
    newSticker = <span><strong style={newStickerStyle}>new</strong></span>
  }
  if (props.isSold) {
    soldOutSticker = <span><em style={soldOutStickerStyle}> - SOLD OUT - </em></span>
  }

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
