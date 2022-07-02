import { useState } from "react"


export const AddCategory = () => {

  const [InputValue, setInputValue] = useState('Naruto')

  const onInputChange = ({ target }) => {
    // console.log( target.value )
    setInputValue( target.value )
  }

  const onSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    console.log(InputValue)
  }

  return (
    <form action="" onSubmit={ (event) => onSubmit(event) }>

      <input
          type="text"
          placeholder="Buscar gifs"
          value={ InputValue }
          onChange={ onInputChange }
      />

    </form>
  )
}
