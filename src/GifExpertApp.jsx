import { useState } from 'react';

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
        <h1>GifExpertApp</h1>

        <button onClick={ onAddCategory }>Agregar</button>

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
