import React from "react";
import {
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBBtn
} from "mdbreact";

const HowTo = () => {
	return (
		<section className='my-5'>
			<MDBRow>
					<MDBCol className="text-center mb-5">
					<h2 className='h1-responsive font-weight-bold text-center my-5'>
						How to install night night
					</h2>
					<p className='grey-text w-responsive text-center mx-auto '>
						You can install night night by installing a single NPM package. And that’s it! We’ll do the rest.
					</p>
					<MDBBtn color="primary" className="text-center" href="https://www.npmjs.com/package/night-night">Get Started</MDBBtn>
					<br/>
					<code>npm install --save night-night</code>
				</MDBCol>
			</MDBRow>
			<MDBRow>
				<MDBCol lg='5' className='mb-lg-0 mb-5'>
					<img
						src='https://images.unsplash.com/photo-1457725798811-c9561232a295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
						alt=''
						className='img-fluid rounded z-depth-1'
					/>
				</MDBCol>
				<MDBCol lg='7'>
					<MDBRow className='mb-3'>
						<MDBCol md='1' size='2'>
							<MDBIcon far icon='file-code' size='2x' className='indigo-text' />
						</MDBCol>
						<MDBCol md='11' size='10'>
							<h5 className='font-weight-bold mb-3'>How can I change the sleep and wake time?</h5>
							<p className='grey-text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing.
								Reprehenderit maiores nam, aperiam minima elit assumenda
								voluptate velit.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className='mb-3'>
						<MDBCol md='1' size='2'>
							<MDBIcon icon='server' size='2x' className='pink-text' />
						</MDBCol>
						<MDBCol md='11' size='10'>
							<h5 className='font-weight-bold mb-3'>Can I self-host night night?</h5>
							<p className='grey-text'>
                Yes! If you’d like to self host the code, just follow the link to Github for the full JavaScript needed to run night night. night night is open source and distributed under the MIT Licence.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className='mb-3'>
						<MDBCol md='1' size='2'>
							<MDBIcon icon='bed' size='2x' className='blue-text' />
						</MDBCol>
						<MDBCol md='11' size='10'>
							<h5 className='font-weight-bold mb-3'>What is sleep debt?</h5>
							<p className='grey-text'>
              When we don’t get enough sleep at night, this is called sleep debt. Sleep debt has a huge impact on our health, wellbeing, and happiness. After just one night of missed sleep you perform cognitively as if intoxicated, and the cumulative impact over time is ugly. One third of Americans don’t get enough sleep, and this lack of sleep is associated with increased stress and depression, hypertension, heart and kidney disease, motor vehicle accidents and suicide.
							</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
			<hr className='my-5' />
			<MDBRow>
				<MDBCol lg='7'>
					<MDBRow className='mb-3'>
						<MDBCol md='1' size='2'>
							<MDBIcon icon='globe-americas' size='2x' className='cyan-text' />
						</MDBCol>
						<MDBCol md='11' size='10'>
							<h5 className='font-weight-bold mb-3'>What is universal responsibility?</h5>
							<p className='grey-text'>
              Universal responsibility is the idea that as designers and technology creators we must take responsibility for ALL of the outcomes of our creations. There is no limit to our liability. We have a responsibility to create great product experiences for people, but we also have a responsibility to care for their general wellbeing and health. We must care for them enough to help them step away from our product and get a good night’s sleep. Universal responsibility is one of the approaches advocated by New Kind of Design.
							</p>
						</MDBCol>
					</MDBRow>
					<MDBRow className='mb-3'>
						<MDBCol md='1' size='2'>
							<MDBIcon
								fab
								icon='autoprefixer'
								size='2x'
								className='deep-purple-text'
							/>
						</MDBCol>
						<MDBCol md='11' size='10'>
							<h5 className='font-weight-bold mb-3'>Who created night night?</h5>
							<p className='grey-text'>
                Masamichi Souzou & Neeley Worldwide 
							</p>
              <MDBBtn outline color="purple" href="https://www.nightnight.xn--q9jyb4c/details">View Creators</MDBBtn>
						</MDBCol>
					</MDBRow>
				</MDBCol>
				<MDBCol lg='5'>
					<img
						src='https://images.unsplash.com/photo-1457726942612-1b660c2740b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2208&q=80'
						alt=''
						className='img-fluid rounded z-depth-1'
					/>
				</MDBCol>
			</MDBRow>
		</section>
	);
};

export default HowTo;
