import babelRemovePropsPlugin from "../../babel/babelRemovePropsPlugin";
import { BuildOptions } from "../types/config";

interface IBuildBabelLoaderProps extends BuildOptions {
    isDev: boolean;
    isTsx: boolean;
}

export const buildBabelLoader = ({ isDev, isTsx }: IBuildBabelLoaderProps) => {
    return {
        test: isTsx ? /\.(?:jsx|tsx)$/ : /\.(?:js|mjs|cjs|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    ["@babel/plugin-transform-typescript", { isTsx }],
                    ["@babel/plugin-transform-runtime"],
                    isTsx && [babelRemovePropsPlugin(), { props: ["data-testid"] }],
                ].filter(Boolean),
            },
        },
    };
};
