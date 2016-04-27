var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "yolk.min.js",
    library: "Yolk",
    libraryTarget: 'var',
    umdNamedDefine: true
  },
  externals: {
    "rxjs": "Rx",
    "rxjs/add/observable/combineLatest": {
      commonjs: "rxjs/add/observable/combineLatest",
      commonjs2: "rxjs/add/observable/combineLatest",
      root: ["Rx", "Observable"]
    },
    "rxjs/add/observable/of": {
      commonjs: "rxjs/add/observable/of",
      commonjs2: "rxjs/add/observable/of",
      root: ["Rx", "Observable"]
    },
    "rxjs/add/operator/map": {
      commonjs: "rxjs/add/observable/of",
      commonjs2: "rxjs/add/observable/of",
      root: ["Rx", "Observable", "prototype"]
    },
    "rxjs/add/operator/mapTo": {
      commonjs: "rxjs/add/observable/mapTo",
      commonjs2: "rxjs/add/observable/mapTo",
      root: ["Rx", "Observable", "prototype"]
    },
    "rxjs/add/operator/share":{
      commonjs: "rxjs/add/observable/share",
      commonjs2: "rxjs/add/observable/share",
      root: ["Rx", "Observable", "prototype"]
    },
    "rxjs/add/operator/switchMap":{
      commonjs: "rxjs/add/observable/switchMap",
      commonjs2: "rxjs/add/observable/switchMap",
      root: ["Rx", "Observable", "prototype"]
    },
    "rxjs/BehaviorSubject": "umd Rx",
    "rxjs/Observable": "umd Rx",
    "rxjs/Observer":"umd Rx",
    "rxjs/Subject":"umd Rx",
    "rxjs/Subscription":"umd Rx"
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: "babel-loader",
      exclude: /(node_modules)/
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
