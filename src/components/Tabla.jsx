import React from 'react'

export default function tabla(listTabla, numMultiplicar ) {
    return (
        <div>
            <li>
                {
                    listTabla.map((result) => (
                       <ul>
                            <p>1 x {numMultiplicar} ={result}</p>
                       </ul>
                    ))
                }
            </li>  
        </div>
    )
}
