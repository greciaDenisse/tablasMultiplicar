import React from 'react'

export default function TablaMultiplicaciones(listTabla, numMultiplicar ) {
    console.log(listTabla);
    return (
        <div>
            <tabla>
            <li>
                {  
                    listTabla.map((result) => (
                       <ul>
                            <p>1 x {numMultiplicar} ={result}</p>
                       </ul>
                    ))
                }
            </li>  
            </tabla>
        </div>
    )
}
