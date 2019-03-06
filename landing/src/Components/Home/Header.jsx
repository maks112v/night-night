import React from "react";
import {
	MDBMask,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBView,
	MDBContainer
} from "mdbreact";
import "./AppPage.css";
import Particles from 'react-particles-js';

const particlesConfig = {
  "particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 100,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

export default (props) => {
	return (
		<div id='apppage'>
			<MDBView>
				<Particles params={particlesConfig} className="particles" />
				<MDBMask className='d-flex justify-content-center align-items-center gradient'>
					<MDBContainer>
						<MDBRow>
							<div className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'>
								<h1 className='h1-responsive font-weight-bold mt-sm-5'>
									Night Night{" "}
								</h1>
								<hr className='hr-light'/>
								<h6 className='mb-4'>
									Do your part to improve world health by putting your website
									to sleep
								</h6>
								<MDBBtn color='primary' onClick={props.enableDemo}>
									Demo
								</MDBBtn>
								<MDBBtn
									outline
									color='white'
									href='https://www.npmjs.com/package/night-night'>
									Get Started with NPM
								</MDBBtn>
								
							</div>
							<MDBCol md='6' xl='5' className='mt-xl-5'>
								<img
									src='/leading.png'
									alt=''
									className='img-fluid'/>
							</MDBCol>
						</MDBRow>
					</MDBContainer>
				</MDBMask>
			</MDBView>
		</div>
	);
};
