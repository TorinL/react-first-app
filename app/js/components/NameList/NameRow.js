import React from 'react';
import { Link } from 'react-router';
import styles from './namelist.css';

export default class NameRow extends React.Component {
	constructor() {
		super();
	}

	render() {
		let {first_name, last_name, id} = this.props.name;
		return (
			<div className={`pure-u-1 pure-u-md-1-3 ${styles.aquamarineBackground}`}>
			<h3 className={styles.name}><Link to={`/names/${id}`}>{first_name} {last_name}</Link></h3>
			</div>
		)
	}
}