(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tabs": {
    "width": "100%",
    "height": "100%"
  },
  ".footer-container": {
    "height": "120px",
    "backgroundColor": "#444444"
  },
  ".tab-btn": {
    "width": "200px",
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".tab-btn .icon": {
    "width": "44px",
    "height": "44px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-btn"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon"
        }
      ]
    }
  },
  ".icon1": {
    "backgroundImage": "/images/list.png"
  },
  ".icon2": {
    "backgroundImage": "/images/my.png"
  },
  ".icon1-active": {
    "backgroundImage": "/images/list_1.png"
  },
  ".icon2-active": {
    "backgroundImage": "/images/list_2.png"
  },
  ".tab-btn text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tab-btn"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".active text": {
    "color": "#80bd01",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "active"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".footer-container image": {
    "width": "44px",
    "height": "44px",
    "display": "flex",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "footer-container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".page-main": {
    "height": "100%",
    "color": "#80bd01"
  },
  "refresh": {
    "progressColor": "#80bd01"
  },
  ".article-item": {
    "display": "flex",
    "width": "100%",
    "height": "100px",
    "fontSize": "24px",
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "0px",
    "borderStyle": "solid",
    "borderTopColor": "#EFEFEF",
    "borderRightColor": "#EFEFEF",
    "borderBottomColor": "#EFEFEF",
    "borderLeftColor": "#EFEFEF",
    "color": "#333333",
    "paddingTop": "0px",
    "paddingRight": "20px",
    "paddingBottom": "0px",
    "paddingLeft": "20px",
    "justifyContent": "flex-start",
    "alignItems": "center"
  },
  ".avatar-icon": {
    "display": "flex",
    "width": "52px",
    "height": "52px",
    "borderRadius": "26px"
  },
  ".articie-title": {
    "marginLeft": "20px",
    "lines": 1,
    "textOverflow": "ellipsis"
  }
}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mbox": {
    "position": "fixed",
    "width": "100px",
    "height": "100px",
    "right": "10px",
    "bottom": "200px",
    "zIndex": 1000
  },
  ".mbox text": {
    "fontSize": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "mbox"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".box-item": {
    "position": "fixed",
    "width": "80px",
    "height": "80px",
    "right": "10px",
    "bottom": "200px",
    "zIndex": 900,
    "opacity": 0,
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#666666",
    "borderRightColor": "#666666",
    "borderBottomColor": "#666666",
    "borderLeftColor": "#666666",
    "borderRadius": "40px"
  },
  ".main": {
    "width": "80px",
    "height": "80px",
    "justifyContent": "center",
    "borderRadius": "40px",
    "backgroundColor": "#ffffff",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#666666",
    "borderRightColor": "#666666",
    "borderBottomColor": "#666666",
    "borderLeftColor": "#666666",
    "textAlign": "center",
    "marginLeft": "10px",
    "marginTop": "10px"
  },
  ".animation-main": {
    "animationName": "mainAnimation",
    "animationDuration": "800ms"
  },
  "@KEYFRAMES": {
    "mainAnimation": [
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":1.2,\"scaleY\":1.2}",
        "time": 20
      },
      {
        "transform": "{\"scaleX\":0.8,\"scaleY\":0.8}",
        "time": 40
      },
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 100
      }
    ]
  }
}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "tabs",
  "attr": {
    "index": function () {return this.now}
  },
  "events": {
    "change": "changeTab"
  },
  "children": [
    {
      "type": "tab-content",
      "attr": {},
      "classList": [
        "content-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "refresh",
              "attr": {
                "refreshing": function () {return this.isRefreshing}
              },
              "events": {
                "refresh": "refresh"
              },
              "children": [
                {
                  "type": "list",
                  "attr": {},
                  "classList": [
                    "main-page"
                  ],
                  "events": {
                    "scrollbottom": "loadMoreData"
                  },
                  "children": [
                    {
                      "type": "block",
                      "attr": {},
                      "repeat": function () {return this.articleList},
                      "children": [
                        {
                          "type": "list-item",
                          "attr": {
                            "type": "article"
                          },
                          "classList": [
                            "article-item"
                          ],
                          "events": {
                            "click": function (evt) {this.openAricle(this.$item.id,this.$item.title,evt)}
                          },
                          "children": [
                            {
                              "type": "image",
                              "attr": {
                                "src": function () {return this.$item.author.avatar_url}
                              },
                              "classList": [
                                "avatar-icon"
                              ],
                              "events": {
                                "click": function (evt) {this.clickCollect(this.$item,evt)}
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.title}
                              },
                              "classList": [
                                "articie-title"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "mbox",
              "attr": {}
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "这是第二页"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "tab-bar",
      "attr": {},
      "classList": [
        "footer-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tab-btn"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return '' + '/images/list' + (this.now==0?'_1':'') + '.png'}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "全部"
              },
              "style": {
                "color": function () {return this.now==0?'#80bd01':'#fff'}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "tab-btn"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return '' + '/images/my' + (this.now==1?'_1':'') + '.png'}
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "我的"
              },
              "style": {
                "color": function () {return this.now==1?'#80bd01':'#fff'}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "mbox"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "id": "main"
      },
      "classList": [
        "main"
      ],
      "id": "main",
      "events": {
        "click": "clickhandle"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.nowName}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {
        "id": function () {return '' + 'box-item-' + (this.$idx)}
      },
      "repeat": function () {return this.tab_list},
      "classList": [
        "box-item"
      ],
      "id": function () {return '' + 'box-item-' + (this.$idx)},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.$item.name}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.vibrator"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    isRefreshing: false,
    articleList: [],
    page: 0,
    limit: 20,
    hasMoreData: true,
    now: 0
  },
  onInit: function onInit() {
    this.refresh();
    this.$page.setTitleBar({
      text: '全部'
    });
  },
  changeTab: function changeTab(nowIndex) {
    this.now = nowIndex.index;
  },
  refresh: function refresh() {
    console.log("shuaxingshuaxing");
    this.isRefreshing = true;
    this.page = 0;
    this.getArticle();
  },
  getArticle: function getArticle() {
    var _this = this;

    _system.default.fetch({
      url: 'https://cnodejs.org/api/v1/topics',
      data: {
        page: this.page,
        limit: this.limit,
        mdrender: false
      },
      success: function success(data) {
        console.info(data);

        if (data.code == '200' && data.data) {
          data = JSON.parse(data.data);

          if (_this.page > 0) {
            _this.articleList = _this.articleList.concat(data.data);

            _system2.default.vibrate({
              mode: 'short'
            });
          } else {
            console.log("运行到这里");
            _this.isRefreshing = false;
            _this.articleList = data.data;
            console.log(_this.isRefreshing);
          }

          console.log(_this.articleList);
        } else {
          console.info("\u63A5\u53E3\u9519\u8BEF");
        }
      },
      fail: function fail(data, code) {
        console.info('fail');
      },
      complete: function complete() {
        console.info('complete');
      }
    });
  },
  openAricle: function openAricle(id, title) {
    _system3.default.push({
      uri: '/Detail',
      params: {
        articleid: id,
        title: title
      }
    });
  },
  loadMoreData: function loadMoreData() {
    if (this.hasMoreData) {
      this.page++;
      this.getArticle();
    }
  }
};
exports.default = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var $animation_main = null;
var $animation_item_0 = null;
var $animation_item_1 = null;
var $animation_item_2 = null;
var $animation_item_3 = null;
var $animation_item_4 = null;
var $animation_item_5 = null;
var _default = {
  data: {
    tab_list: [{
      name: '全部',
      type: 'qb'
    }, {
      name: '精华',
      type: 'jh'
    }, {
      name: '分享',
      type: 'fx'
    }, {
      name: '问答',
      type: 'wd'
    }, {
      name: '招聘',
      type: 'zp'
    }, {
      name: '测试',
      type: 'cs'
    }],
    nowIndex: 0,
    nowName: '',
    mainClass: '',
    isShow: false
  },
  onReady: function onReady() {
    this.setName();
  },
  setName: function setName() {
    this.nowName = this.tab_list[this.nowIndex].name;
  },
  clickhandle: function clickhandle() {
    var _this = this;

    this.runMainAnimation();
    this.tab_list.forEach(function (item, index) {
      _this.runAnimation(index);
    });
  },
  runMainAnimation: function runMainAnimation() {
    console.log("hahahha");
    var keyframs = [{
      transform: {
        scale: 1
      },
      time: 0
    }, {
      transform: {
        scale: 1.2
      },
      time: 20
    }, {
      transform: {
        scale: 0.8
      },
      time: 40
    }, {
      transform: {
        scale: 1
      },
      time: 100
    }];
    var options = {
      duration: 800,
      easing: 'linear',
      delay: 0,
      fill: 'none'
    };
    var element = this.$element('main');
    $animation_main = element.animate(keyframs, options);
    $animation_main.play();
  },
  runAnimation: function runAnimation(index) {}
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!../../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp")

$app_define$('@app-component/mbox', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/Main/index.ux?uxType=page":
/*!***************************************!*\
  !*** ./src/Main/index.ux?uxType=page ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/ux-loader.js?type=import!../components/Mbox/index.ux?uxType=comp&name=mbox */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox")
var $app_template$ = __webpack_require__(/*! !../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=mbox */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/template-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox")
var $app_style$ = __webpack_require__(/*! !../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/json-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/style-loader.js?index=0&type=style!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/access-loader.js!../../node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/script-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/module-loader.js!./node_modules/_babel-loader@8.0.5@babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/jsx-loader.js&comments=false!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/access-loader.js!./node_modules/_hap-toolkit@0.1.1@hap-toolkit/packager/lib/webpack/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map