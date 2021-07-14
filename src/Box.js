import React from "react";

const Box = ({id, width=5, height=5, backgroundColor="grey", handleRemove}) => {
    //this function executes the handleRemove function that is passed from BoxList
    //since we cannot instantiate it when we pass it in jsx
    const remove = () => handleRemove(id)
    return(
        <div>
           <div style={{width: `${width}em`, height: `${height}em`, backgroundColor }} />
           <button onClick={remove}>X</button>
        </div>
    )
}

export default Box;


