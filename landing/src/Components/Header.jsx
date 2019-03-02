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

export default (props) => {
	return (
		<div id='apppage'>
			<MDBView>
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
									href='https://github.com/maks112v/nightnight'>
									Get Started
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
