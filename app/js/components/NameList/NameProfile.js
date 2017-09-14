import React from 'react';
import { browserHistory, Link } from 'react-router';
import { namelist } from './namelist.css';

import names from '../../../../mock-data';


export default class NameProfile extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		let { id } = this.props.params;
		this.user = names.find((name) => 
			name.id === +id
		)
	}

	render() {
		let user= this.user;
		if (user) { 
			user = 
				<div>
					<h2>{user.first_name} {user.last_name}</h2>
					<p>{user.first_name} lives in {user.city} and can be reached by <a href={`mailto:${user.email}`}>email</a>.</p>
					<p>As {user.first_name} loves to say: "{user.catch_phrase}"</p>
				</div>
		} else {
			user = <h2>Sorry, this user was not found :( </h2>
		}
		return (
			<div className={namelist}>
				{user}
				<Link to="/names"><button className="pure-button">Go to all names</button></Link>
			</div>
		)
	}
}