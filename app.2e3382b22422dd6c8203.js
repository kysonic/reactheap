webpackJsonp([0,3],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),a=o(r),u=n(30),i=o(u),l=n(163),c=o(l);i["default"].render(a["default"].createElement(c["default"],null),document.getElementById("app"))},163:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),c=o(l),f=n(164),s=o(f),d=n(168),p=o(d),v=[{id:p["default"].v4(),task:"Make something good"},{id:p["default"].v4(),task:"Make something bad"}],b=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.addNote=function(){n.setState({notes:n.state.notes.concat([{id:p["default"].v4(),task:"New task"}])})},n.deleteNote=function(e,t){t.stopPropagation(),n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.activateNoteEdit=function(e){n.setState({notes:n.state.notes.map(function(t){return t.id===e&&(t.editing=!0),t})})},n.editNote=function(e,t){n.setState({notes:n.state.notes.map(function(n){return n.id===e&&(n.editing=!1,n.task=t),n})})},n.state={notes:v},n}return u(t,e),i(t,[{key:"render",value:function(){var e=this.state.notes;return c["default"].createElement("div",{className:"App"},c["default"].createElement("button",{className:"add-note",onClick:this.addNote},"+"),c["default"].createElement("br",null),c["default"].createElement(s["default"],{notes:e,onNoteClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))}}]),t}(c["default"].Component);t["default"]=b},164:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=o(r),u=n(165),i=o(u),l=n(166),c=o(l),f=n(167),s=o(f);t["default"]=function(e){var t=e.notes,n=e.onDelete,o=void 0===n?function(){}:n,r=e.onEdit,u=void 0===r?function(){}:r,l=e.onNoteClick,f=void 0===l?function(){}:l;return a["default"].createElement("ul",{className:"Notes"},t.map(function(e){var t=e.id,n=e.editing,r=e.task;return a["default"].createElement("li",{key:t,className:"Note"},a["default"].createElement(i["default"],{onClick:f.bind(null,t)},a["default"].createElement(c["default"],{editing:n,value:r,onEdit:u.bind(null,t),className:"editable"}),a["default"].createElement("button",{className:(0,s["default"])("delete",n?"hidden":""),onClick:o.bind(null,t)},"X")))}))}},165:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),u=o(a);t["default"]=function(e){var t=e.children,n=r(e,["children"]);return u["default"].createElement("div",n,t)}},166:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f=n(1),s=o(f),d=n(167),p=o(d),v=function m(e){var t=e.editing,n=e.value,o=e.onEdit,r=e.className,a=i(e,["editing","value","onEdit","className"]);return t?s["default"].createElement(m.Edit,c({value:n,className:r,onEdit:o},a)):s["default"].createElement(m.Value,{value:n})};v.Value=function(e){var t=e.className,n=e.value,o=i(e,["className","value"]);return s["default"].createElement("span",c({className:(0,p["default"])("value",t)},o),n)};var b=function(e){function t(){var e,n,o,u;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.checkEnter=function(e){"Enter"===e.key&&o.finishEdit(e)},o.finishEdit=function(e){var t=e.target.value;o.props.onEdit&&o.props.onEdit(t)},u=n,a(o,u)}return u(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.value;i(e,["className","value"]);return s["default"].createElement("input",{type:"text",autoFocus:!0,defaultValue:n,onBlur:this.finishEdit,onKeyPress:this.checkEnter,className:(0,p["default"])("edit",t)})}}]),t}(s["default"].Component);v.Edit=b,t["default"]=v}});
//# sourceMappingURL=app.2e3382b22422dd6c8203.js.map