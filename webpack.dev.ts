import path from "path";
import merge from "webpack-merge";
import ForkTsCheckerNotifierWebpackPlugin from "fork-ts-checker-notifier-webpack-plugin";
import webpack from "webpack";
import common from "./webpack.common";

const config = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        open: true,
    },
    plugins: [
        new ForkTsCheckerNotifierWebpackPlugin({
            title: "TypeScript",
            excludeWarnings: false,
            alwaysNotify: true,
        }),
        new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    ],
    devtool: "inline-source-map",
});

export default config;
