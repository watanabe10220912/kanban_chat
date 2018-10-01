const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');


module.exports = () => {
    return new Promise((resolve, reject) => {
        let conf = {
            entry: './src/index.js',
            output: {
                path: `${__dirname}/dist/js`,
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        use: [
                            {
                                loader: "vue-loader"
                            }
                        ]
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                            },
                        ]
                    },
                    {
                        test: /\.css$/,
                        use: [
                            'vue-style-loader',
                            'css-loader'
                        ]
                    }
                ]
            },
            resolve: {
                modules: [path.join(__dirname, 'src'), 'node_modules'],
                extensions: ['.js', '.vue', '.json'],
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                },
            },
            plugins: [
                new VueLoaderPlugin(),
            ],
            devtool:'source-map',
            mode:'development'
        }
        resolve(conf);

})}