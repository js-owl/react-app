import webpack from "webpack";
import { BuildOptions } from "./types/config";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolvers";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
  };
}
