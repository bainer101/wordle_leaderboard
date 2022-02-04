import React from 'react';
import IPlayer from "../interfaces/IPlayer";
import '../styles/Leaderboard.css';
import ILeaderboard from "../interfaces/ILeaderboard";
import Player from "./Player";

const Leaderboard: React.FC<ILeaderboard> = ({players}) => {
    return (
        <div className="Leaderboard">
            <table>
                <thead>
                    <th></th>
                    <th>Username</th>
                    <th>Rank</th>
                    <th>Score</th>
                </thead>
                <tbody>
                {players.map((player: IPlayer) => {
                    return <Player {...player} />;
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;