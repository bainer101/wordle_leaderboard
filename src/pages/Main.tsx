import '../styles/Main.css';
import DataSource from '../classes/DataSource';
import Title from '../components/Title';
import IPlayer from '../interfaces/IPlayer';
import Leaderboard from "../components/Leaderboard";
import React from 'react';
import Button from "../components/Button";

const Main = () => {
    const dataSource = new DataSource();

    let players: IPlayer[] = dataSource.initPlayers();

    players.sort((a, b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0);
    players.map((player, index) => {
        player['rank'] = index + 1;
    })

    return (
        <div className="App">
            <Title/>
            <Leaderboard players={players}/>
            <Button value="Submit Wordle" />
        </div>
    );
}

export default Main;
