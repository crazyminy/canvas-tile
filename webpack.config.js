/* eslint-disable */
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');

module.exports={
	mode:'development',
	entry:"./index.tsx",
	output:{
		filename:'bundle.min.js',
		path:path.resolve(__dirname,'dist/')
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				use:['babel-loader'],
				exclude:/node_modules/
			},
			{
				test:/\.tsx?$/,
				use:['awesome-typescript-loader'],
				exclude:/node_modules/
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          "style-loader",
          // 将 CSS 转化成 CommonJS 模块
          "css-loader",
          // 将 Sass 编译成 CSS
          "sass-loader",
        ],
      },
		]
	},
	resolve:{
		extensions:['.tsx','.ts','.js','.sass','.css']
	},
	devServer:{
		open:true,
		// cache:false,
		// port:8080,
		hot:true,
		contentBase:'dist/'
	}, 
	// 输出souce-map 方便调试 es6的源码
	devtool:'source-map',
	plugins:[
		new HtmlWebpackPlugin({
			template:path.join(__dirname,'/index.html')
		}),
		new CleanWebpackPlugin()
	]
}
