import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal';
import '../PokCard/PokCard.css';

export default function PokCard({ name,url }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return (
        <div className='PokCard' onClick={() => setIsPopupOpen(true)}>
            <div>
                <img className='PokCard__image' src={"imageURL"} />
            </div>
            <div className='PokCard__title'>
                <h1>{name}</h1>
                <p>{`#${url.substring(34,url.length-1)}`}</p>
            </div>
            {isPopupOpen && <Modal
               url={url}
            />}
        </div>

    )
}
