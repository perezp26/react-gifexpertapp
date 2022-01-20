import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    
    //const categories = ['Bob esponja', 'Caballeros del Zodiaco', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Goku']);

    // const handleAdd = () =>{
    //     //setCategories( [...categories, 'Super Campeones']);
    //     setCategories( cats => [...cats, 'Super Campeones']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key= { category }
                            category = { category }
                        />
                    ))
                }
            </ol>
        </>
    )

}

export default GifExpertApp;

