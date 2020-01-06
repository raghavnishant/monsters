import React from 'react';
import './listItems.css';
import { ItemDetail } from './ItemDetail';


export const ListItems = (props) => {
 return (
   <div className='listItems'>
      {
          props.monsters.map(monster => {
            return <ItemDetail key={monster.id} monster={monster} />
          })
        }
   </div>
 )
}