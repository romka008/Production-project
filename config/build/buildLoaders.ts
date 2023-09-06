import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCssLoader(isDev);

    const babelLoader = {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
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
