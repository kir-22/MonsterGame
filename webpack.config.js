let webpack = require('webpack');

module.exports = {
	entry: './src/screens/battle/index',
  output: {
    filename: 'bundle.js'
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 100,
	},
	module:{
    rules:[
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:[{
          loader: 'file-loader',
          options:{
            name:'[path][name].[ext]',
            outputPath: './img/',
          },
        }]
      }
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery':'jquery'
    }),
  ],
	devtool: 'eval' //cheap-inline-module-source-map
}