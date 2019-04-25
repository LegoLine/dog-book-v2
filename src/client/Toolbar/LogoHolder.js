import React from 'react';
import LogoHolder from '../../style.css'

import pets from './pets.png';

const logoholder = () => {
    return (
        <div className={LogoHolder}>
            <p id='logo-text'>DogBook</p>
            <img id='logo' src={pets} alt='LOGO'/>
        </div>
    )
}

export default logoholder;