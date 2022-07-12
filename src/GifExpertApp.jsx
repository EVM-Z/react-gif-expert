import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Puch', 'Dragon Ball' ]);
  
  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes( newCategory )) return;

    // Primera forma de agregar un elemento al arreeglo
    setCategories([ newCategory, ...categories ]);

  }

  return (
    
    <>

      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ event => onAddCategory(event) }

      />
      
      <ol>
        {
          categories.map( ( category ) => {
            return <li key={ category }>{ category }</li>
          })
        }
        {/* <li>ABC</li> */}
          
        </ol>
    </>

  )
}
