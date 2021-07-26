const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.env.NODE_ENV = 'development'
module.exports = {
    entry:'./src/js/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            ident:'postcss',
                            plugins:() => [
                                require('postcss-preset-env')()
                            ]

                            
                        }
                    }
                ]
            },
            
                {
                    test: /\.less$/,
                    use:[
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'less-loader'
                    ]
                }
            
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        })
    ],
    mode:'production'
}