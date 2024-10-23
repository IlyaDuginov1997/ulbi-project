import path from 'path';
import webpack from 'webpack';
import {webpackBuilderConfig} from "./config/build/webpackBuilderConfig";
import {BuildPaths} from "./config/build/types/buildOptions";

const mode = 'development';
const isDev = mode === 'development';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
}

const config: webpack.Configuration = webpackBuilderConfig({
    mode: 'development',
    paths,
    isDev
});

export default config;