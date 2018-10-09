import React from "react";
import "./Header.scss";
import Particles from "react-particles-js";

class Header extends React.Component {
  render = () => {
    return (
      <div className="header-container">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50
              },
              size: {
                value: 3
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        />
        <div className="content">
          <h1>Zac Clark</h1>
        </div>
      </div>
    );
  };
}
export default Header;
