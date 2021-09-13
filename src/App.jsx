import React, { Fragment, useRef, useState } from 'react'
import tabla from './components/Tabla'



export function App() {

    const [listResult, setListResult] = useState({});
    //const [numMultiplicar, setNultiplicar] = useState();

    let numMultiplicar = 0 ;
    const opciones = useRef();

    const btnSelecionar = () => {
    
    numMultiplicar = opciones.current.value;


    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    setListResult((preListResult) => {
        const resultado = numbers.map((number) => number * numMultiplicar);
        return resultado;
    })

    // setNultiplicar (opciones.current.value);

    /* numMultiplicar = opciones.current.value;

    

     */

    }

    return (
        <Fragment>
            <label>Escoge una tabla</label>
            <select ref = { opciones } onClick={ btnSelecionar }>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
            <tabla listResult = {listResult} numMultiplicar = {1}/>
         
          
        </Fragment>
    )
}

