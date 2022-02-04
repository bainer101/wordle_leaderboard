import {IconProp, library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDown, faAngleRight, faAngleUp, faMedal} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React from 'react';
import IPlayer from "../interfaces/IPlayer";
import '../styles/Player.css';

const Leaderboard: React.FC<IPlayer> = ({rank, name, score}) => {
    library.add(faAngleUp, faAngleDown, faAngleRight, faMedal);

    const icons: { className: string, icon: IconProp, color: string }[] = [
        {className: 'icon', icon: 'angle-up', color: 'green'},
        {className: 'icon', icon: 'angle-down', color: 'red'},
        {className: 'icon', icon: 'angle-right', color: 'gray'}
    ];

    const medalCols = ['gold', 'silver', 'chocolate'];
    const icon = icons[Math.floor(Math.random() * icons.length)];

    let medal;

    if (rank && rank <= 3) {
        medal = <FontAwesomeIcon className='icon' icon='medal' color={medalCols[rank - 1]}/>;
    }

    return (
        <tr className="Player">
            <td id="medal">{medal}</td>
            <td id="name">{name}</td>
            <td id="id"><FontAwesomeIcon className='icon' icon={icon.icon} color={icon.color}/>{rank}</td>
            <td id="score">{score}</td>
        </tr>
    );
};

export default Leaderboard;