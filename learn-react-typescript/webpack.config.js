const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	entry: "./src/app/app.tsx",
	plugins: [
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ["public/build"],
		}),
		new HtmlWebpackPlugin({
			template: "src/templates/index.html",
		}),
	],
	output: {
		path: __dirname + "/public",
		filename: "build/[name].[contenthash].js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".css"],
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader", options: { modules: true } },
				],
			},
			{ test: /\.tsx?$/, loader: "ts-loader" },
		],
	},
}
