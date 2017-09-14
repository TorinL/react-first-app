import React from 'react';

import NameRow from './NameList/NameRow';

import names from '../../../mock-data';


export default class FilterableNameList extends React.Component {
	constructor() {
		super();
		this.state = {
			names: [],
			filterText: ''
		};
		this.handleClick = this.handleClick.bind(this);
		this.nameFilter = this.nameFilter.bind(this);
	}

	componentWillMount() {
		this.setState({
			names: names
		})
	}

	handleClick(event) {
		event.preventDefault();
	
	}

	nameFilter(event) {
		this.setState({
			filterText: event.target.value 
		})
	}


	render() {
		let {names} = this.state;
		let {filterText} = this.state;
		if (filterText) {
			names = names.filter((name) => {
				let fullName = `${name.first_name} ${name.last_name}`;
				return fullName.toLowerCase().includes(filterText.toLowerCase());
			});
		}
		return (
			<div>
				<h2>{this.state.event}</h2>
				<input onChange={this.nameFilter} type="text"/>
				{names.map((name) => 
					<NameRow key={name.id} name={name} />
				)}
			</div>
		)
	}
}
