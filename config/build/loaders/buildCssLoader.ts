import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
    return {
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
            // {
            //     loader: "sass-resources-loader",
            //     options: {
            //         resources: [path.resolve(__dirname, "../../../src/app/styles/index.scss")],
            //     },
            // },
        ],
    };
};
