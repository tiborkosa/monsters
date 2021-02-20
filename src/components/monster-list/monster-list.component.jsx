
import React from 'react';

import './monster-list.style.css';

import Monster from '../monster/monster.component';

const MonstersList = ({monsters}) => {
    if(monsters.length > 0)
        return (
        <div className="card-list">
            {monsters.map( (monster, idx) => (
                <Monster key={idx} monster = {monster} />
            ))}
        </div>);
    else return (<div>No data</div>);
}

export default MonstersList;