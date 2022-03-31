import React from 'react';

const Chef = (props) => {
    return (
        <>
            <p key={props.id}>{props.name}</p>
            <ul>
                {props.dishes.map(dish => {
                    return <li key={dish.id}>{dish.name}</li>
                })}
            </ul>
        </>
    );
}

export default Chef;
