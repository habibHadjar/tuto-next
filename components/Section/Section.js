import React from 'react'
import Chef from '../Chef/Chef.js'
import { culinr } from '../../data/culinr.js'

const Section = () => {

  culinr.chefs.forEach(chef => {
    chef.dishes = chef.dishes.filter(dish => dish.isOnline)
  })

  return (
    <>
      {culinr.chefs.map(chef => <Chef key={chef.id} {...chef} />)}
    </>
  )
}

export default Section
