import React from "react";

import alphaJuno from './tools/alphajuno.png';
import jomox from './tools/jomox888.png';
import prophet from './tools/prophet-08.png';

import lighLitch from './tools/lighlitch.gif';
import lightTwo from './tools/light2.gif';
import lightThree from './tools/light3.gif';

function Inst() {
    return (
        <div className="tools-container">
            <img className="tools-img" src={lightThree} alt="glitch1" />

            <div className="tools-container-item">
                <img src={alphaJuno} alt="Alpha Juno 1" />
            </div>

            <img className="tools-img" src={lighLitch} alt="glitch2" />

            <div className="tools-container-item">
                <img src={prophet} alt="DSI Prophet 08" />
            </div>

            <img className="tools-img" src={lightTwo} alt="glitch2" />

            <div className="tools-container-item">
                <img src={jomox} alt="Jomox888" />
            </div>
        </div>
    )
}

export default Inst;