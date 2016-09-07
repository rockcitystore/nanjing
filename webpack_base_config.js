var path = require('path')
var webpack = require('webpack')
module.exports = {
	entry: {
		aframe: './app.js'
	},
	output: {
    	path: path.resolve(__dirname, 'dist/'),//文件路径
    	publicPath: '/',//url
    	filename: '[name].js',
		chunkFilename: '[name].chunk.js'
  	},
  	resolve: {
    	extensions: ['', '.js', '.vue','.scss', '.css'],//识别后缀 可免输文件名
    	alias: {//别名
    	}
  	},
  	resolveLoader: {//制定loader root目录
    	root: path.join(__dirname, 'node_modules')
  	},
	module: {
		loaders: [
			// {
			// 	test: /\.js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	loader: 'babel', // 'babel-loader' is also a legal name to reference
			// 	query: {
			// 		presets: ['es2015']
			// 	}
			// }
		]
	},
	plugins: [
		//提取公用文件
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'lib',
		// 	chunks: ['a','brand']
		// }),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common',
		// 	chunks: ['lib', 'swiper']
		// }),
	//定义全局变量
	// 		new webpack.ProvidePlugin({
	// 		g: path.join(__dirname, './src/js/global.js'),
	// 		url: path.join(__dirname, './src/js/url.js'),
	// 		auth: path.join(__dirname, './src/js/auth.js'),
	// 		adapter: path.join(__dirname, './src/js/adapter.js')
	// 	})
	]
}
