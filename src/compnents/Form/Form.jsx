import React from 'react'
import './form.css'

function Form() {
    return (
      <div className='formDiv'>
          <form id='form'>
              <input id='input1' type="text" />
              <br/>
              <input id='input2' type="text" />
              <br/>
              <button id='button'>Add To Cart</button>
          </form>
      </div>
    )
  }

export default Form