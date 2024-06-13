import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = options;
    const cssLoader = buildCssLoader(isDev);

    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    // Если не используем тайпскрипт - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: "ts-loader",
    //     exclude: /node_modules/,
    // };

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
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
