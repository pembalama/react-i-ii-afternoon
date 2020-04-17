import React, { Component } from 'react';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import data from './data';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Cards cardData={data} />
			</div>
		);
	}
}
