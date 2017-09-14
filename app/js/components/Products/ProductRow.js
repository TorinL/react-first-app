import React from 'react';
import { Link } from 'react-router';
import styles from './products.css';

export default class ProductRow extends React.Component {
	constructor() {
		super();
	}

	render() {
		
		const { id, productName, productAdjective, price, image } = this.props.product
		return (
			<div className={`pure-u-1 pure-u-md-1-2 ${styles.product}`}>
				<h3><Link to={`/products/${id}`}>{productName}</Link></h3>
				<ul>
					<li><img className={`pure-img ${styles.thumb}`} src={image}/></li>
					<li>{productAdjective}</li>
					<li>${price}</li>
				</ul>
			</div>
		)
	}
}
