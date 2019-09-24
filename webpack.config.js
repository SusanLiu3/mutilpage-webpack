let path=require('path')
var test=require('./utils/entry')
let {arrHtmlWebpack,entry}=require('./utils/entry').module();

const {VueLoaderPlugin} = require('vue-loader')
var {CleanWebpackPlugin}=require('clean-webpack-plugin')
var HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry,
    output:{
        filename:'[name].[hash:8].js',
        path:path.resolve(__dirname,'dist'),
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    },                    
                },
                include:[
                    path.join(__dirname,'src')
                ]
            },
           
            {
                test:/\.css/,
                use:['style-laoder','css-loader']
            }
        ]
    },
    resolve:{
        // alias:{
        //     'vue$': 'vue/dist/vue.esm.js',
        // }
    },
    plugins:[
        new CleanWebpackPlugin(),
        ...arrHtmlWebpack,    
        
        new VueLoaderPlugin(),
       
        
        
        
    ],
    devServer:{
        // contentBase:path.resolve(__dirname,'dist'),
        port:8080,
        hot:true,
        host:'0.0.0.0'
    }
    
}