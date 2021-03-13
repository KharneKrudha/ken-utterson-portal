import React from 'react';

import KenUtt from './ku';
import logoBlack from './media/logo-black.png';

function LogoHome() {
    return (
        <div className='logo-home'>



            <img className='logo-home-image glitch' src={logoBlack} alt="logo" />

            {/* <KenUtt /> */}

            <div className='query'>

                <img className='logo-home-image glitch logoRight' src={logoBlack} alt="logo" />

            </div>

            {/* <div className='query'>
                <KenUtt />
            </div> */}

        </div>
    )
}

export default LogoHome;