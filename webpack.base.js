module.exports = {
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015'],
              }
            },
            {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.vue'],
    },
};
