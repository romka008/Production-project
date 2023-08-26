import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
                        localIdentName: isDev
                            ? `[path][name]__[local]--[hash:base64:5]`
                            : `[hash:base64:8]`,
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [["@babel/preset-env", { targets: { node: "current" } }]],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const fileLoader = {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "./img/[name].[ext]",
                },
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
