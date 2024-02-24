import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import BuildOptions from "./types/config";

export default function buildPlugins({
  paths,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ];
}
