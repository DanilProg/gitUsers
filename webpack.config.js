const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack")
module.exports = (env) => {
    const mode = env.mode || 'production'
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'index.[hash].js',
            clean: true,
            publicPath: "/"
        },
        mode,
        devServer: {
            open: true,
            port: 3000,
            historyApiFallback: true
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js']
        },
        module: {
            rules: [
                {
                    test: /.(jsx?|tsx?)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader",
                        {
                            loader:"css-loader",
                            options: {
                                importLoaders:1,
                                modules: {
                                    auto:/\.module\.css$/,
                                    localIdentName: "[local]--[hash:base64:5]"
                                },
                            },
                        }
                    ],

                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new Dotenv()
        ]
    }
}