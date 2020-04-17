import React from 'react';
import Actions from './Actions';
import data from '../data';

export default class Cards extends React.Component {
	constructor() {
		super();
		this.state = {
			personArray: [ ...data ],
			index: 0
		};
	}

	next = (ind) => {
		if (ind < 24) {
			ind++;
			this.setState({ index: ind });
		}
	};

	previous = (ind) => {
		if (ind > 0) {
			ind--;
			this.setState({ index: ind });
		}
	};

	render() {
		let card = this.state.personArray;
		let index = this.state.index;
		let name = `${card[index].name.first} ${card[index].name.last}`;
		let listMovies = card[index].favoriteMovies.map((val, i) => {
			return <li key={i}>{val}</li>;
		});

		return (
			<div className="card-item">
				<h1 className="main-heading">
					{card[index].id}/{card.length}
				</h1>
				<div className="content-item">
					<h1>{name}</h1>
					<h3>
						From: {card[index].city}, {card[index].country}
					</h3>
					<h3>Job Title: {card[index].title}</h3>
					<h3>Employer: {card[index].employer}</h3>
					<br />
					<h3>Favorite Movies: </h3>
					<ol>{listMovies}</ol>
				</div>
				<div className="buttons-item">
					<Actions previous={this.previous} next={this.next} ind={index} />
				</div>
			</div>
		);
	}
}
