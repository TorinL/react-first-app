import React from 'react';
import styles from './products.css';
import PRODUCTS from '../../../../mock-products';

export default class ProductProfile extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		let productID = this.props.id || +this.props.params.id;
		this.product = PRODUCTS.find((product) => 
			product.id === productID
		)
	}

	render() {
		const { 
			productName, 
			productAdjective, 
			price, 
			productMaterial, 
			color, 
			text, 
			image
			 } = this.product;
		return (
			<div className={styles.products}>
				<div className="pure-g">
					<div className="pure-u-1 pure-u-md-3-5">
						The <strong>{productName}</strong> has a wonderful {color} color, with inspired {productAdjective} {productMaterial} properties. 
						<h4>Price: ${price}</h4>
						<p>{text}</p>
					</div>
					<div className="pure-u-1 pure-u-md-1-5">
						<img className={`pure-image ${styles.profileImage}`} src={image} />
					</div>
				</div>
			</div>
		)
	}
}