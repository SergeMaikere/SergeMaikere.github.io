import * as path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(css|scss)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }	
};