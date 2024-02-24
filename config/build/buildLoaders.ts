import webpack from "webpack";

export default function buildLoaders(): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader", // создание CSS из JS строк
      "css-loader", // преобразование CSS в CommonJS
      "sass-loader", // преобразование Sass в CSS
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };
  return [typescriptLoader, cssLoader];
}
