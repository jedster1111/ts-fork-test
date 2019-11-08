import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader",
                options: { transpileOnly: true },
            },
        ],
    },
    resolve: { extensions: ["*", ".js", ".ts", ".tsx"] },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js",
    },
    plugins: [new ForkTsCheckerWebpackPlugin({ eslint: true })],
};

export default config;
