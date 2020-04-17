import React from 'react';

export default class Actions extends React.Component {
	handlePrevious = (e, ind) => {
		e.preventDefault();
		this.props.previous(ind);
	};

	handleOnNext = (e, ind) => {
		e.preventDefault();
		this.props.next(ind);
	};

	render() {
		let index = this.props.ind;
		return (
			<div className="position-item">
				<a onClick={(e) => this.handlePrevious(e, index)}>&#x3c; Previous</a>
				<button>Edit</button>
				<button>Delete</button>
				<button>New</button>
				<a onClick={(e) => this.handleOnNext(e, index)}>Next &#x3e;</a>
			</div>
		);
	}
}
