import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
var title = '梦里不知身是客,一晌贪欢';
ReactDOM.render(React.createElement("div", null, title), document.getElementById('app'));

if (module.hot) {
  // 实现热更新
  module.hot.accept();
}