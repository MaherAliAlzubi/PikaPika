import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import '../PokCard/PokCard.css';


export default function PokCard({ name, number, weight, height, hp, attack, imageURL }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className='PokCard' onClick={() => setIsPopupOpen(true)}>
            <div>
                <img className='PokCard__image' src={imageURL} />
            </div>
            <div className='PokCard__title'>
                <h1>{name}</h1>
                <p>{`#${number}`}</p>
            </div>
            {isPopupOpen && <Modal
                name={name}
                number={number}
                weight={weight}
                height={height}
                hp={hp}
                attack={attack}
                imageURL={imageURL}
            />}
        </div>

    )
}
