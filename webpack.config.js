var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "yolk-dist.js",
    library: "yolk",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    "rxjs": "Rx",
    "rxjs/add/observable/combineLatest":"Rx.Observable.combineLatest",
    "rxjs/add/observable/of": "Rx.Observable.of",
    "rxjs/add/operator/map": "Rx.Observable.prototype.map",
    "rxjs/add/operator/mapTo": "Rx.Observable.prototype.mapTo",
    "rxjs/add/operator/share":"Rx.Observable.prototype.share",
    "rxjs/add/operator/switchMap":"Rx.Observable.prototype.switchMap",
    "rxjs/BehaviorSubject": "Rx.BehaviorSubject",
    "rxjs/Observable": "Rx.Observable",
    "rxjs/Observer":"Rx.Observer",
    "rxjs/Subject":"Rx.Subject",
    "rxjs/Subscription":"Rx.Subscription"
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
