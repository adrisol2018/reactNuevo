 import React from 'react';

function Button(props) {

    const styleBtn = { backgroundColor: props.color}
    return(
    <>
    <button style={styleBtn} className= "btn" text ="Entrar">
        {props.children || props.text}
    </button>
    
    </>

    
    )
}


export default Button 