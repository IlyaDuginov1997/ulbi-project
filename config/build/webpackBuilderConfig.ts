import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import webpack from 'webpack';
import {BuildOptions} from "./types/buildOptions";
import {buildWebpackDevServer} from "./buildWebpackDevServer";

export function webpackBuilderConfig(options: BuildOptions): webpack.Configuration {
    const {mode, isDev, paths} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildWebpackDevServer(options) : undefined,
    }
}