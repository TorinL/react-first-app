import React from 'react';
import { Link } from 'react-router';
import styles from './main.css';

import ProductProfile from '../Products/ProductProfile';
import PRODUCTS from '../../../../mock-products';

export default class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		let randomProduct = Math.floor(Math.random() * PRODUCTS.length);
		const { background, header, divider } = styles;
		return (
			<div>
				<div className={background} />
				<div className={header} >
					<h2>Lorem ipsum dolor sit amet</h2>
					<ul>
						<li>Fusce rutrum nunc vitae</li>
						<li>Morbi a augue eu magna ornare tempus.</li>
						<li>Etiam vulputate mauris vitae commodo sagittis.</li>
					</ul>
				</div>
				<div className={divider} />
				<ProductProfile id={randomProduct}/>
				<Link to={`/products/${randomProduct}`}>Click here for more</Link> 
				<p>
					Ut ultricies tellus non orci vehicula finibus. Sed tellus augue, varius et tortor nec, 
					semper laoreet ex.
				</p>
				<div className={divider} />
			</div>
		)
	}
}