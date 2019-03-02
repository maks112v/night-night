import React from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBBtn,
	MDBInput
} from "mdbreact";

const ContactPage = () => {
	return (
		<MDBContainer>
			<h2 className='h1-responsive font-weight-bold text-center my-5'>
				Contact us
			</h2>
			<MDBRow>
				<MDBCol>
					<form name="Contact Night Night" netlify>
						<MDBRow>
							<MDBCol md='6'>
								<div className='md-form mb-0'>
									<MDBInput type='text' name="Name" id='contact-name' label='Your name' />
								</div>
							</MDBCol>
							<MDBCol md='6'>
								<div className='md-form mb-0'>
									<MDBInput type='text' name="Email" id='contact-email' label='Your email' />
								</div>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol md='12'>
								<div className='md-form mb-0'>
									<MDBInput type='text' name="Subject" id='contact-subject' label='Subject' />
								</div>
							</MDBCol>
						</MDBRow>
						<MDBRow>
							<MDBCol md='12'>
								<div className='md-form mb-0'>
									<MDBInput
                    type='textarea'
                    name="Message"
										id='contact-message'
										label='Your message'
									/>
								</div>
							</MDBCol>
						</MDBRow>
					</form>
					<div className='text-center text-md-left'>
						<MDBBtn type="submit" color='primary' size='md'>
							Send
						</MDBBtn>
					</div>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ContactPage;
