import React from 'react';
import './searchbox.css';


export const Searchbox = ({search, onSubmit}) => {
  return (
    <input 
    className='search'
    value={search}
    onChange={onSubmit}
   />
  )
}