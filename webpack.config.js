const path = require("path");
const ListCopyFiles = require("./list-copy-files");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFileWebpackPlugin = require("write-file-webpack-plugin");

console.log("ListCopyFiles", ListCopyFiles);

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                    // "postcss-loader",
                ]
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 4000,
        open: true,
        watchContentBase: true,
        hot: false,
    },
    plugins: [
        new CopyPlugin(ListCopyFiles.ListCopyFiles),
        new WriteFileWebpackPlugin(),
    ]
};
