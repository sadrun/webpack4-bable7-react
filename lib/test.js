import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _Set from "@babel/runtime-corejs3/core-js-stable/set";
import _Map from "@babel/runtime-corejs3/core-js-stable/map";
import _Symbol from "@babel/runtime-corejs3/core-js-stable/symbol";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";

var Apple =
/*#__PURE__*/
function () {
  function Apple() {
    _classCallCheck(this, Apple);

    this.name = _Symbol('orange');
    this.attrs = new _Map();
  }

  _createClass(Apple, [{
    key: "hello",
    value: function hello() {
      var _context;

      var set = new _Set();
      var o = [1, 2, 3, 45, 5];

      var p = _concatInstanceProperty(_context = []).call(_context, o);

      console.log('hello');

      _Promise.resolve(0)["finally"](function () {});
    }
  }]);

  return Apple;
}();

var Bork = function Bork() {
  var _this = this;

  _classCallCheck(this, Bork);

  _defineProperty(this, "boundFunction", function () {
    return _this.state;
  });
};

export default Apple;