module.exports = {
  env: {
    development: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-proposal-class-properties'],
    },
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-proposal-class-properties'],
    },
  },
};
