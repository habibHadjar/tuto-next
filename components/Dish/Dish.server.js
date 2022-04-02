import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap' 

const Dish = (props) => {
  const liRef = useRef(null)

  const ingredientsList = props.ingredients.map(ingredient => {
    return <li ref={liRef} className="ingredients" key={ingredient}>{ingredient}</li>
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


  useEffect(() => {
    gsap.to('.ingredients', {
      x: 100,
      ease: 'ease-in-out',
      stagger: {
        amount: 0.7,
        from: 'center'
      }
    })
  }, [])

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
