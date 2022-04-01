import React from 'react'
import Dish from '../Dish/Dish.server'

const Chef = ({ id, name, dishes }) => {
  return (
    <>
      <p key={id}>{name}</p>
      <ul>
        {dishes.map(dish => (
          <Dish key={dish.id} {...dish} />
        ))}
      </ul>
    </>
  )
}

export default Chef
