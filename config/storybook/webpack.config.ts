import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push(".ts", ".tsx");

    if (config.module) {
        config.module.rules = config.module?.rules?.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (rule: RuleSetRule | any, index: number, array: (RuleSetRule | "...")[]) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i } as RuleSetRule;
                }

                return rule;
            }
        );
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });
    config.module?.rules?.push(buildCssLoader(true));

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        })
    );

    return config;
};
