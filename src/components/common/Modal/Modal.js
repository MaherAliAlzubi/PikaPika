import React, { useState, useEffect } from 'react'
import '../Modal/Modal.css';
import axios from 'axios';

export default function Modal({ url }) {

    const [pok, setPok] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                const data=response.data;
                setPok(response.data);
            })
            .catch();
    }, [url]);

    console.log({pok})
    return (
   <>     {
            pok &&
        <div className='modal'>
            <div className='modal-content'>
                <div className='modal-header'>
                    <h1 className='modal-title'>{pok?.name}</h1>
                    <h1 className='modal-title'>{`#${pok?.id}`}</h1>
                </div>
                <div className='modal-body row'>
                    <img className='modal-body--image' src={pok?.sprites?.other?.dream_world?.front_default} />
                    <div className='column'>
                        <h2>{`Weight : ${pok?.weight}`}</h2>
                        <h2>{`Height : ${pok?.height}`}</h2>
                        <h2>{`HP : ${pok?.stats[0]?.base_stat}`}</h2>
                        <h2>{`Attack : ${pok?.stats[1]?.base_stat}`}</h2>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}
