import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{

        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [inputValue, ...cats]); // utilizo el callback ya que con el setCategories tengo acceso al valor o estado de categories.
            setInputValue('');
        }

        

    }

    return(
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputValue }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
