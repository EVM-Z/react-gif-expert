import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Puch', 'Dragon Ball' ]);
  
  // console.log(categories);
  const onAddCategory = () => {
    
    // categories.push('Naruto');
    // ...categories hace una copia del arreglo

    // Primera forma de agregar un elemento al arreeglo
    // setCategories([ ...categories, 'Naruto' ]);

    // Segunda forma
    setCategories( categories => [ ...categories, 'Sasuke' ]);

  }

  return (
    
    <>

      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories } />

      {/* Listago de Gif */}
      {/* <button onClick={ onAddCategory }>Agregar</button> */}
      
      <ol>
        {
          categories.map( category => {
            return <li key={ category }>{ category }</li>
          })
        }
        {/* <li>ABC</li> */}
          
        </ol>
    </>

  )
}
