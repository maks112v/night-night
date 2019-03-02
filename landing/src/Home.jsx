import React, { Component } from "react";
import Header from "./Components/Home/Header";
import Features from "./Components/Home/Features";
import { MDBContainer } from "mdbreact";
import HowTo from "./Components/Home/HowTo";
import Footer from "./Components/Home/Footer";
import Contribute from "./Components/Home/Contribute";

export default (props) => {
	return (
		<div>
			<Header enableDemo={props.toggle} />
			<MDBContainer>
				<Features />
				<HowTo />
				<Contribute />
			</MDBContainer>
			<Footer />
		</div>
	);
};
