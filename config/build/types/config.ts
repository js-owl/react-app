// export type BuildMode = "production" | "development";
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: "production" | "development";
  paths: BuildPaths;
  isDev: boolean;
}
export default BuildOptions;
