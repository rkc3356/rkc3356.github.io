import React from 'react';
import ParticleComponent from '../components/Particle';
import home from '../media/home.png';
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className='Welcome'>
            <br />
            <img src={home} alt={"Home Icon"} width={20} />
            <br />
            <Link to={'/home'}>
                <button>WELCOME</button>
            </Link>
            <br />
            <br />
            <br />
            <ParticleComponent />
        </div>
    );
}

export default Welcome;