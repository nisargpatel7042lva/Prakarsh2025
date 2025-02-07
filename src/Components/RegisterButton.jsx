import React from 'react';
import './styles/registerbutton.css';
import registerImage from '../assets/astrouu.png'; // Import the image

const RegisterButton = () => {
    return (
        <>
            <div className='container-register'>
                <button>
                    <img src={registerImage} alt="Register Icon" width="36" height="36" />
                    <span className="now">Now!</span>
                    <span className="play">Register</span>
                </button>
            </div>
        </>
    );
}

export default RegisterButton;

//converted to png//