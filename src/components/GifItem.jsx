import React from 'react'

export const GifItem = ({ title, url, id }) => {

  return (
    <div className='card'>
      <img src={ url } alt={ title } />
      <p>{ title }</p>

    </div>
  )
}

/*
Tarea
1. Añadir PropTypes
2. Title obligatorio

Evaluar el snapshot
*/