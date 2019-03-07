const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const htmlWebpackPlugin=require("html-webpack-plugin");
const fs = require('fs');
const srcRoot = path.resolve(__dirname, "src");
const distPath = path.resolve(__dirname, 'dist');
const pageDir = path.resolve(srcRoot, 'page');
const mainFile = 'index.js';

function getHtmlArray(entryMap) {
    let htmlArray = [];
    Object.keys(entryMap).forEach(key=>{
        let fullPathName=path.resolve(pageDir, key);
        global.console.log(fullPathName);
        let fileName = path.resolve(fullPathName, key + ".html");

        if( fs.existsSync(fileName)) {
            htmlArray.push(new htmlWebpackPlugin({
                filename: key + '.html',
                template: fileName,
                chunks: [key]
            }))
        }
    });
    return htmlArray;
}

function getEntry(){
    let entryMap = {};
    fs.readdirSync(pageDir).forEach(pathName=>{
        let fullPathName = path.resolve(pageDir, pathName);
        let stat = fs.statSync(fullPathName);
        let fileName = path.resolve(fullPathName, mainFile);
        if( stat.isDirectory() && fs.existsSync(fileName)) {
            entryMap[pathName] = fileName;
        }
    });
    //global.console.log("entryMap-----------", entryMap);
    return entryMap;
}
const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);
module.exports = {
    mode: "production",
    entry: entryMap,
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: distPath,
        filename: "js/[name].min.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: [{loader: "babel-loader"}], include: srcRoot},
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: "sass-resources-loader",
                    options: {
                        resources: srcRoot + '/component/common.scss'
                    }
                }], include: srcRoot},
            { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcRoot}
        ]
    },
    plugins: [
        new CleanWebpackPlugin([distPath]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        })
    ].concat(htmlArray)
}