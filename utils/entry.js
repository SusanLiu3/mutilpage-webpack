let glob = require('glob')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var webpack = require('webpack')
let entry = {};
let arrHtmlWebpack = [];

exports.module = function () {
    glob.sync('./src/pages/*/index.js').forEach(filePath => {
        var match = filePath.match(/\.\/src\/pages\/(.+)\/index/)
        var key = match[1]
        entry[key] = filePath;
        var template = filePath.replace('pages', 'html').replace('/index.js', '') + '.html'
        var filename = key + '.html';
        arrHtmlWebpack.push(
            new HtmlWebpackPlugin(
                {
                    template,
                    filename,
                    chunks: [key],
                    // inject:'head'
                }
            )
        )
    })
   
    return { arrHtmlWebpack, entry }
}
