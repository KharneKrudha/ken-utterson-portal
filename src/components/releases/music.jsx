import React from "react";

import photon from './releases/photon.jpeg';
import insane from './releases/insane.jpeg';
import dryyoureyes from './releases/dryyoureyes.jpeg';
import minds from './releases/minds.jpeg';
import koba from './releases/203.jpeg';
import ethan from './releases/ethan.jpeg';
import greed from './releases/greed.jpeg';

function Music() {
    return (

        <div className="releases-container">
            <div className="releases-container-item">
                <a href="https://qubiqrecords.bandcamp.com/album/greed-e-p">
                    <img src={greed} alt="Greed E.P." />
                </a>
            </div>

            <div className="releases-container-item">
                <a href="https://qubiqrecords.bandcamp.com/track/ethan-fawkes-electro-mission-planned-remix-by-ken-utterson">
                    <img src={ethan} alt="Electric Mission Remix" />
                </a>
            </div>

            <div className="releases-container-item">
                <a href="https://alferox.bandcamp.com/album/20-3-kobayashi-036">
                    <img src={koba} alt="20/3 E.P." />
                </a>
            </div>

            <div className="releases-container-item">
                <a href="https://silentsteps.bandcamp.com/track/hrrr">
                    <img src={minds} alt="Minds Compilation" />
                </a>
            </div>


            <div className="releases-container-item">
                <a href="https://ashcode.bandcamp.com/track/dry-your-eyes-ken-utterson-rmx">
                    <img src={dryyoureyes} alt="Ash Code - Dry your eyes (Ken Utterson RMX)" />
                </a>
            </div>

            <div className="releases-container-item">
                <a href="https://soundcloud.com/ken-utterson/insane">
                    <img src={insane} alt="Ken Utterson - Insane" />
                </a>
            </div>

            <div className="releases-container-item">
                <a href="https://somaticresponses.bandcamp.com/track/ken-utterson-ballet-m-canique">
                    <img src={photon} alt="Photon Collisions Compilation" />
                </a>
            </div>
        </div>
    )
}

export default Music;