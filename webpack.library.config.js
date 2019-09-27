
var path=require('path')
var webpack=require('webpack')
var {CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports={
    mode:'development',
    entry:{
        'library':['vue/dist/vue.esm.js']
    },
    output:{
        filename:'[name]_dll_lib.js',
        path:path.resolve(__dirname,'public'),
        library:'[name]_dll',
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            path:path.resolve(__dirname,'public','[name].manifest.json'),
            name:'[name]_dll',
            context:__dirname
        })
    ]

}