import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

const Dish = (props) => {
  const ingredientsRef = useRef([])

useLayoutEffect(() => {
  gsap.fromTo(ingredientsRef.current, {
    x: 100,
    ease: 'power1.inOut',
  },{
    x: 0,
    duration: 1,
    stagger: {
      amount: 0.2
    }
  })
})

  const ingredientsList = props.ingredients.map(ingredient => {
    return <li ref={el => { ingredientsRef.current = el ? [...ingredientsRef.current, el] : [] }} className="ingredients" key={ingredient}>{ingredient}</li>
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
