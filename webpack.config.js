let path=require('path')
var test=require('./utils/entry')
var webpack=require('webpack')
let {arrHtmlWebpack,entry}=require('./utils/entry').module();

const {VueLoaderPlugin} = require('vue-loader')
var {CleanWebpackPlugin}=require('clean-webpack-plugin')
var AddAssetHtmlWebpackPlugin=require('add-asset-html-webpack-plugin')


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
                test:/\.html$/,
                // 处理HTML页面中的img标签
                use:{
                    loader:'html-withimg-loader'
                }
            },
           
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            },            
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:9000
                    }
                }
            },
            // {
            //     test:/\.(png|jpg|gif)$/,
            //     use:{
            //         loader:'file-loader',
                
            //     }
            // },
        ]
    },
    resolve:{
        extensions:['.js','.json','.vue'],
        alias:{
            'vue':'vue/dist/vue.esm.js',
            '@': path.join(__dirname,'/src'),
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        ...arrHtmlWebpack,    
        
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./public/library.manifest.json')
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath:require.resolve(path.resolve(__dirname,'public/library_dll_lib.js')),
            outputPath:'lib', // 生成得js 在dist目录下建的文件夹
            publicPath:'lib' //  引入js的路径
        })
       
        
        
        
    ],
    devServer:{
        // contentBase:path.resolve(__dirname,'dist'),
        port:8555,
        hot:true,
        host:'0.0.0.0'
    }
    
}