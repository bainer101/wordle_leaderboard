import IButton from "../interfaces/IButton";
import {FC} from "react";
import React from "react";
import '../styles/Button.css';
import {Link} from "react-router-dom";

const Button: FC<IButton> = ({value}) => {
    return (
        <Link to="/login">
            <div className="Button">
                <h3>{value}</h3>
            </div>
        </Link>
    );
}

export default Button;