const path = require('path');
const htmlWebpackPlugin=require("html-webpack-plugin");
const fs = require('fs');
const srcRoot = path.resolve(__dirname, "src");
const devPath = path.resolve(__dirname, 'dev');
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
    global.console.log("htmlArray------------", htmlArray);
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
    global.console.log("entryMap-----------", entryMap);
    return entryMap;
}
const entryMap = getEntry();
const htmlArray = getHtmlArray(entryMap);
module.exports = {
    mode: "development",
    entry: entryMap,
    output: {
        path: devPath,
        filename: "[name].min.js"
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: [{loader: "babel-loader"}], include: srcRoot},
            { test: /\.css$/, use: ['style-loader', 'css-loader'], include: srcRoot },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'], include: srcRoot},
            { test: /\.(png|jpg|jpeg)$/, use: 'url-loader?limit=8192', include: srcRoot}
        ]
    },
    plugins: [

    ].concat(htmlArray),
    devServer: {
        contentBase: devPath
    }
}