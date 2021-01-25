import React, { Component } from "react";

import LogoHome from './logoHome';
import SocialLinks from "./socialLinks";

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <LogoHome />
        <SocialLinks />
      </div>
    )
  }
}

export default Home;

