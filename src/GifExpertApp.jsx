import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Puch' ]);
  
  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes( newCategory )) return;

    // Primera forma de agregar un elemento al arreeglo
    setCategories([ newCategory, ...categories ]);

  }

  return (
    
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ event => onAddCategory(event) }
      />      
        {
          categories.map( ( category ) => (
              <GifGrid
                key={ category }
                category = { category }
              />
            )            
          )
        }
    </>

  )
}
