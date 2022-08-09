import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

    
    return (
        <>
            <h3>{ category }</h3>

            <ol className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            // title={ image.title }
                            // url={ image.url }

                            // Esparcimos las props
                            { ...image}
                        />
                    ))
                }
            </ol>
            
        </>
    )
}

    