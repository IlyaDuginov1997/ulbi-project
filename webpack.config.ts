import path from 'path';
import webpack from 'webpack';
import {webpackBuilderConfig} from "./config/build/webpackBuilderConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/buildOptions";

export default function (env: BuildEnv) {
    const PORT = env.port || 3000;
    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const config: webpack.Configuration = webpackBuilderConfig({
        mode,
        paths,
        isDev,
        port: PORT,
    });

    return config;
};