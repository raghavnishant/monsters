import React from 'react';
import './itemDetail.css';



export const ItemDetail = ({monster}) => {
  return (
    <div className='itemDetail'>
    <img 
     alt='Monster'
     src={`https://robohash.org/W${monster.id}.png?set=set1?size=100x100`}
    />
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>

    </div>
  )
}