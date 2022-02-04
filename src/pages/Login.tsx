import React from 'react';
import Button from "../components/Button";
import Title from "../components/Title";

import '../styles/Login.css';

const Login = () => {
    return (
        <div className='container'>
            <Title/>
            <div className='form'>
                <input type='text'/>
            </div>
            <div className='btn-container'>
                <div className='btn'>
                    <Button value="Log In"/>
                </div>
                <div className='btn'>
                    <Button value="Sign Up"/>
                </div>
            </div>
        </div>
    );
}

export default Login;