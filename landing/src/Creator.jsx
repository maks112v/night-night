import React, { Component } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const options = {
	mode: "javascript",
	theme: "material",
	lineNumbers: true
};

export default class Creator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	render() {
		return (
			<MDBContainer>
				<MDBRow className='mt-5'>
					<MDBCol>
						<h2>Creator</h2>
					</MDBCol>
				</MDBRow>
				<MDBRow>
					<MDBCol>
						<CodeMirror
							value={this.state.value}
							options={options}
							onBeforeChange={(editor, data, value) => {
								this.setState({ value });
							}}
							onChange={(editor, data, value) => {}}
						/>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}
