import React from 'react'
import PokCard from '../PokCard/PokCard';
import '../PokList/PokList.css';

export default function PokList({ data }) {
    return (
        <div className='PokList'>
            {data.map((pok) => {
                return (
                    <PokCard
                        key={pok.number}
                        name={pok.name}
                        url={pok.url}
                    />
                );
            })}
        </div>
    )
}
