(function(graph){
            function require(module){
            function localRequire(relativePath){
                return require(graph[module].dependencies[relativePath])
            }
            var exports = {};
            (function(require,exports,code){
                eval(code)
            })(localRequire,exports,graph[module].code);
            return exports;
            }
            require('./src/index.js')
        })({"./src/index.js":{"dependencies":{"./a.js":"./src\\a.js","./b.js":"./src\\b.js"},"code":"\"use strict\";\n\nvar _a = _interopRequireDefault(require(\"./a.js\"));\n\nvar _b = _interopRequireDefault(require(\"./b.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }"},"./src\\a.js":{"dependencies":{},"code":"\"use strict\";\n\nconsole.log('这里是a');"},"./src\\b.js":{"dependencies":{"./a.js":"./src\\a.js"},"code":"\"use strict\";\n\nvar _a = _interopRequireDefault(require(\"./a.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log('这里是b');"}})