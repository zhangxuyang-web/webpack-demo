const pluginName = 'myFirstPlugin';
module.exports = class myFirstPlugin {
  apply(compiler) {
    console.log(compiler);
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('webpack 构建过程开始！');
      // console.log(compilation);
    });
  }
};
