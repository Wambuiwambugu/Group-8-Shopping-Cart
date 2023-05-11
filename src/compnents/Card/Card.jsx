import React from 'react'
import './card.css'
import { image,title,description } from '../data'


function Card() {
    return (
      <div className="card">
        <img src={image} alt="Product" />
        <h2>{title}</h2>
        <p>The official shoe for olympic games!</p>
      </div>
    );
  }
export default Card