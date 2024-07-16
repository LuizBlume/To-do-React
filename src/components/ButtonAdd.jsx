import React from 'react';
const Button = ({ onClick }) => {
    return (
        <>
            <button type='button' onClick={onClick}>Enviar</button>
        </>
    )
}
export default Button;