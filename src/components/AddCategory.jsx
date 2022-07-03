import { useState } from "react"


export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({ target }) => {
    // console.log( target.value )
    setInputValue( target.value )
  }

  const onSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    // console.log(inputValue)
    
    if( inputValue.trim().length <= 1 ) return;

    setCategories( categories => [ inputValue, ...categories ]);
    setInputValue('');

  }

  return (
    <form action="" onSubmit={ onSubmit }>

      <input
          type="text"
          placeholder="Buscar gifs"
          value={ inputValue }
          onChange={ onInputChange }
      />

    </form>
  )
}
