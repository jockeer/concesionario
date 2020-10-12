import React from 'react'

const Error = ({mensaje,clase}) => {
    return ( 
        <p className={clase}>{mensaje}</p>
     );
}
 
export default Error;