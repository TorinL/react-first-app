import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';

import Layout from './components/Layout';

import FilterableNameList from './components/NameList/FilterableNameList';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Main from './components/Main/Main';
import NameProfile from './components/NameList/NameProfile';

import ProductList from './components/Products/ProductList';
import ProductProfile from './components/Products/ProductProfile';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Layout} >
			<IndexRoute component={Main} />
			<Route path="products">
				<IndexRoute component={ProductList} />
				<Route path=":id" component={ProductProfile}/> 
			</Route>
			<Route path="names">
				<IndexRoute component={FilterableNameList} />
				<Route path=":id" component={NameProfile} />
			</Route>
			<Redirect from="users(/:id)" to="names(/:id)" />
			<Route path="*" component={PageNotFound} />
		</Route>
	</Router>,
	document.getElementById('app')
);
