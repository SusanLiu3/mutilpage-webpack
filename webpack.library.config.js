
var path=require('path')
var webpack=require('webpack')

var {CleanWebpackPlugin}=require('clean-webpack-plugin')

module.exports={
    mode:'development',
    entry:{
        'library':['vue/dist/vue.esm.js']
    },
    output:{
        // 生成动态链接库的名字
        filename:'[name]_dll_lib.js',
        // 指定生成的动态链接库的目录
        path:path.resolve(__dirname,'public'),
        /**
         * 生成的.json文件中对外的全局变量名字
         * 这个名字需要和DllPlugin 插件中的name 名字对应起来
        */ 
        library:'[name]_dll',
        /**
         * 打包动态链接库后，会在当前路径的public目录下面生成两个文件
         * 1）library_dll_lib.js
         * 2) library.manifest.json
        */

    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            // 描述动态链接库的 mainfest.json 输出时的文件名
            path:path.resolve(__dirname,'public','[name].manifest.json'),
            /**
             * 动态链接库的全局变量名称，需要和 output.library 中保持一致
             * 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
             * 如 "name":"library_dll"
            */ 
            name:'[name]_dll',
            context:__dirname
        })
    ]

}
