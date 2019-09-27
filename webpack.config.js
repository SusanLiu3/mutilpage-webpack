let path=require('path')
var test=require('./utils/entry')
var webpack=require('webpack')
let {arrHtmlWebpack,entry}=require('./utils/entry').module();

const {VueLoaderPlugin} = require('vue-loader')
var {CleanWebpackPlugin}=require('clean-webpack-plugin')


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
                use:['style-loader','css-loader']
            }
        ]
    },
    resolve:{
        extensions:['.js','.json','.vue'],
        alias:{
            'vue':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        ...arrHtmlWebpack,    
        
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./public/library.manifest.json')
        })
       
        
        
        
    ],
    devServer:{
        // contentBase:path.resolve(__dirname,'dist'),
        port:8555,
        hot:true,
        host:'0.0.0.0'
    }
    
}