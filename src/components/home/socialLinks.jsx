import React, { Component } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaSoundcloud } from "react-icons/fa";

class SocialLinks extends Component {
      render() {
            return (
                  <div className='social-links'>
                        <a href="https://www.facebook.com/ken.utterson/">
                              <FaFacebookF size={29} color="white" />
                        </a>
                        <a href="https://www.instagram.com/ken_utterson/">
                              <FaInstagram size={35} color="white" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCsY1Fembu_Po3Cac1I2Jiew/featured?view_as=subscriber">
                              <FaYoutube size={35} color="white" />
                        </a>
                        <a href="https://soundcloud.com/ken-utterson">
                              <FaSoundcloud size={38} color="white" />
                        </a>
                  </div>
            )
      }
}

export default SocialLinks;