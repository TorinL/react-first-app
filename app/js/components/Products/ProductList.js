import React from 'react';

import styles from './products.css'

import ProductRow from './ProductRow';

import PRODUCTS from '../../../../mock-products';


export default class ProductList extends React.Component {
	constructor() {
		super();
		this.state = {
			products: []
		}
	}

	componentWillMount() {
		this.setState({
			products: PRODUCTS
		})
	}

	render() {

		let { products } = this.state;
		return (
			<div className={`pure-g ${styles.products}`}>
				{products.map((product) => 
					<ProductRow key={product.id} product={product} />
				)}
			</div>
		)
	}
}