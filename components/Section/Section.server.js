import React from 'react';
import Chef from '../Chef/Chef.server.js';
import { culinr } from '../../data/culinr.js'

const SectionServer = () => {

    culinr.chefs.forEach(chef => {
        chef.dishes = chef.dishes.filter(dish => dish.isOnline)
    })

    const chefComponents = culinr.chefs.map( chef => {
        return <Chef key={chef.id} {...chef} />
    })

    return (
        <>
            {chefComponents}
        </>
    );
}

export default SectionServer;
