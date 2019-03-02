import React from "react";
import {
	MDBRow,
	MDBCol,
	MDBCardBody,
	MDBIcon,
	MDBBtn,
	MDBView,
	MDBMask
} from "mdbreact";

const Contribute = () => {
	return (
		<section className='text-center my-5'>
			<h2 className='h1-responsive font-weight-bold my-5'>Contribute To Our Project</h2>
			<p className='grey-text w-responsive mx-auto mb-5'>
				Help us make everyones life a little bit better and add this to your website. Also add a feature to improve the use for everyone.
			</p>

			<MDBRow className='text-center'>
				<MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
					<MDBView className='overlay rounded z-depth-1' waves>
						<img
							src='/styles.png'
							alt=''
							className='img-fluid'
						/>
						<a href='#!'>
							<MDBMask overlay='white-slight' />
						</a>
					</MDBView>
					<MDBCardBody className='pb-0'>
						<h4 className='font-weight-bold my-3'>Help Us Style</h4>
						<p className='grey-text'>
							Create a new theme and we will let the user select which theme they want to use.To add to the project fork the github and after adding and testing make a merge request and we will review it.
						</p>
						<MDBBtn color='blue' outline href="https://github.com/maks112v/night-night" ><MDBIcon fab icon='github' className='left' />View Github</MDBBtn>
					</MDBCardBody>
				</MDBCol>
				<MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
					<MDBView className='overlay rounded z-depth-1' waves>
						<img
							src='/functions.png'
							alt=''
							className='img-fluid'
						/>
						<a href='#!'>
							<MDBMask overlay='white-slight' />
						</a>
					</MDBView>
					<MDBCardBody className='pb-0'>
						<h4 className='font-weight-bold my-3'>Update NPM Version</h4>
						<p className='grey-text'>
							Allow users to customise the project more. Create new or improve current functionality. To add to the project fork the github and after adding and testing make a merge request and we will review it.
						</p>
						<MDBBtn color='blue' href="https://www.npmjs.com/package/night-night"><MDBIcon fab icon='react' className='left' /> NPM Package</MDBBtn>
					</MDBCardBody>
				</MDBCol>
				<MDBCol lg='4' md='12' className='mb-lg-0 mb-4'>
					<MDBView className='overlay rounded z-depth-1' waves>
						<img
							src='/js.png'
							alt=''
							className='img-fluid'
						/>
						<a href='#!'>
							<MDBMask overlay='white-slight' />
						</a>
					</MDBView>
					<MDBCardBody className='pb-0'>
						<h4 className='font-weight-bold my-3'>Update JS Version</h4>
						<p className='grey-text'>
							If you don't know react js add your changes to the js file in src and we will port it over to our npm package.
						</p>
						<MDBBtn color='blue' outline hre="https://github.com/maks112v/night-night/blob/master/src/nightnight.js"><MDBIcon fab icon='js' className='left' /> View File</MDBBtn>
					</MDBCardBody>
				</MDBCol>
			</MDBRow>
		</section>
	);
};

export default Contribute;
