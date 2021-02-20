import React from 'react';
import './monster.style.css';

const Monster = props => {
    return (
        <div className="card-container">
            <img alt='monster'
                src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Monster;