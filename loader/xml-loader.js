// const { getOptions } = require('loader-utils');
// const validateOptions = require('schema-utils');

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
};

const path = require('path');

module.exports = function (source) {
  // const options = getOptions(this);

  // validateOptions(schema, options, 'Example Loader');
  console.log('loader!!!', path.basename(this.resourcePath));
  // 对资源应用一些转换……

  // 输出原始文件
  this.emitFile('./origin/' + path.basename(this.resourcePath), source);
  return JSON.stringify(source);
};
