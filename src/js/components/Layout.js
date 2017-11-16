import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {"title": "Welcome"};		
	}
	render() {
		// const title = "Test title";
		setTimeout(() => {
			this.setState({"title": "Welcome J"});
		}, 2000);
		return (
			<div>
				<Header title={this.state.title} />
				<Footer/>
			</div>	
		);
	}
}