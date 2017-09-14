const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./app/js/app.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: [
					'react-hot', 
					'babel?presets[]=react,presets[]=es2015'
				],
			}, 
			{
				test: /\.css$/,
				loaders: [
					'style-loader', 
					'css-loader?modules=true,localIdentName=[name]__[local]__[hash:base64:5],camelCase=true'
				]
			},
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	]
}

