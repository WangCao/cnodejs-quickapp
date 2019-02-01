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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  },
  ".my-page": {
    "width": "100%",
    "height": "100%"
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".mbox": {
    "position": "fixed",
    "width": "100px",
    "height": "100px",
    "right": "10px",
    "bottom": "200px",
    "zIndex": 1000,
    "justifyContent": "center",
    "alignItems": "center"
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
    "opacity": 0,
    "right": "20px",
    "bottom": "210px",
    "zIndex": 900,
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
    "borderRadius": "40px",
    "justifyContent": "center",
    "marginLeft": "10px",
    "marginTop": "10px"
  },
  ".main": {
    "width": "80px",
    "height": "80px",
    "justifyContent": "center",
    "borderRadius": "40px",
    "backgroundColor": "#444444",
    "textAlign": "center"
  },
  ".main text": {
    "color": "#80bd01",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "main"
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
        "transform": "{\"scaleX\":0.8,\"scaleY\":0.8}",
        "time": 20
      },
      {
        "transform": "{\"scaleX\":1.2,\"scaleY\":1.2}",
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/My/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/My/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".my": {
    "width": "100%",
    "height": "100%",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "column"
  },
  ".my .header": {
    "width": "100%",
    "height": "200px",
    "backgroundColor": "#444444",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "my"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox,importNames[]=my":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox,importNames[]=my ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
              "attr": {
                "isshow": function () {return this.now==0?true:false}
              },
              "events": {
                "change-type": "changeType"
              }
            }
          ]
        },
        {
          "type": "my",
          "attr": {}
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {
    "id": "mbox"
  },
  "classList": [
    "mbox"
  ],
  "id": "mbox",
  "children": [
    {
      "type": "div",
      "attr": {
        "id": "main"
      },
      "classList": function () {return ['main', this.mainClass]},
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
        "id": function () {return '' + 'box-item-' + (this.$idx+1)}
      },
      "repeat": function () {return this.tab_list},
      "classList": [
        "box-item"
      ],
      "id": function () {return '' + 'box-item-' + (this.$idx+1)},
      "events": {
        "click": function (evt) {this.changeTab(this.$item,evt)}
      },
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/My/index.ux?uxType=comp&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/My/index.ux?uxType=comp& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "my"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/images/logo.svg"
          }
        },
        {
          "type": "text",
          "attr": {
            "value": "name"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.vibrator"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _tools = __webpack_require__(/*! ../tools */ "./src/tools/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = {
  private: {
    isRefreshing: false,
    articleList: [],
    page: 0,
    limit: 20,
    hasMoreData: true,
    now: 0,
    tab: 'all'
  },
  onInit: function onInit() {
    this.refresh();
    this.$on('changeType', this.changeType);
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

    (0, _tools.request)('https://cnodejs.org/api/v1/topics', {
      page: this.page,
      limit: this.limit,
      mdrender: false,
      tab: this.tab
    }).then(function (data) {
      data = JSON.parse(data);

      if (_this.page > 0) {
        _this.articleList = _this.articleList.concat(data.data);

        _system.default.vibrate({
          mode: 'short'
        });
      } else {
        console.log("运行到这里");
        _this.isRefreshing = false;
        _this.articleList = data.data;
        console.log(_this.isRefreshing);
      }
    });
  },
  openAricle: function openAricle(id, title) {
    _system2.default.push({
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
  },
  changeType: function changeType(tab) {
    this.$page.setTitleBar({
      text: tab.detail.name
    });
    this.tab = tab.detail.type;
    this.page = 0;
    this.getArticle();
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

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var time;
var animation_arr = [];
var show_or_hide_keyframs = [{
  transform: {
    translateX: 0
  },
  time: 0
}, {
  transform: {
    translateX: 200,
    opacity: 1
  },
  time: 100
}];
var show_or_hide_options = {
  duration: 200,
  easing: 'linear',
  fill: 'forwards'
};
var show_or_hide_animate;
var _default = {
  props: {
    isshow: {
      default: true
    }
  },
  data: {
    tab_list: [{
      name: '全部',
      type: 'all'
    }, {
      name: '精华',
      type: 'good'
    }, {
      name: '分享',
      type: 'share'
    }, {
      name: '问答',
      type: 'ask'
    }, {
      name: '招聘',
      type: 'job'
    }, {
      name: '测试',
      type: 'dev'
    }],
    nowIndex: 0,
    nowName: '',
    mainClass: '',
    isOpen: false,
    isReady: false
  },
  onReady: function onReady() {
    this.isReady = true;
    console.log(this.isshow);
    this.$watch('isshow', 'runHideOrShowAnimation');
    this.setName();
  },
  setName: function setName() {
    this.nowName = this.tab_list[this.nowIndex].name;
  },
  clickhandle: function clickhandle() {
    var _this = this;

    if (!this.isReady) return;
    clearTimeout(time);
    this.mainClass = '';
    time = setTimeout(function () {
      _this.mainClass = 'animation-main';

      if (_this.isOpen) {
        _this.runCloseAnimation();
      } else {
        _this.runOpenAnimation();
      }
    }, 0);
  },
  runOpenAnimation: function runOpenAnimation() {
    var _this2 = this;

    this.tab_list.forEach(function (item, index) {
      var keyframes = [{
        transform: {
          translateY: 0
        },
        opacity: 0,
        time: 0
      }, {
        transform: {
          translateY: -140 * (index + 1)
        },
        opacity: 1,
        time: 100
      }];
      var options = {
        duration: 200,
        easing: 'linear',
        delay: 160,
        fill: 'forwards'
      };

      var node = _this2.$element("box-item-".concat(index + 1));

      animation_arr[index] = node.animate(keyframes, options);
      animation_arr[index].play();
    });
    this.isOpen = true;
  },
  runCloseAnimation: function runCloseAnimation() {
    try {
      animation_arr.forEach(function (item, index) {
        if (!item.finished) {
          throw '动画还未结束';
        }

        item.reverse();
      });
      this.isOpen = false;
    } catch (err) {
      console.info("".concat(err));
    }
  },
  changeTab: function changeTab(tab) {
    this.$emit('changeType', tab);
    this.nowName = tab.name;
    this.runCloseAnimation();
  },
  timeout: function timeout(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  },
  runHideOrShowAnimation: function () {
    var _runHideOrShowAnimation = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (this.isReady) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              if (!this.isOpen) {
                _context.next = 6;
                break;
              }

              this.runCloseAnimation();
              _context.next = 6;
              return this.timeout(200);

            case 6:
              if (!show_or_hide_animate) {
                show_or_hide_animate = this.$element("mbox").animate(show_or_hide_keyframs, show_or_hide_options);
              }

              if (this.isshow) {
                show_or_hide_animate.reverse();
              } else {
                show_or_hide_animate.play();
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function runHideOrShowAnimation() {
      return _runHideOrShowAnimation.apply(this, arguments);
    }

    return runHideOrShowAnimation;
  }()
};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/My/index.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/My/index.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {};
exports.default = _default;}

/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/Mbox/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/Mbox/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/Mbox/index.ux?uxType=comp")

$app_define$('@app-component/mbox', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/My/index.ux?uxType=comp&name=my":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/My/index.ux?uxType=comp&name=my ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/components/My/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/components/My/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../../node_modules/babel-loader?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!../../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/components/My/index.ux?uxType=comp")

$app_define$('@app-component/my', [], function($app_require$, $app_exports$, $app_module$){
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

__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!../components/Mbox/index.ux?uxType=comp&name=mbox */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/Mbox/index.ux?uxType=comp&name=mbox")
__webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!../components/My/index.ux?uxType=comp&name=my */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/ux-loader.js?type=import!./src/components/My/index.ux?uxType=comp&name=my")
var $app_template$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=mbox,importNames[]=my */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/template-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=template!./src/Main/index.ux?uxType=page&importNames[]=mbox,importNames[]=my")
var $app_style$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!less-loader!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/json-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=style!./src/Main/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!../../node_modules/babel-loader?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!../../node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/script-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/common/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?plugins[]=/home/mi/work/github/cnodejs-quickapp/node_modules/hap-toolkit/packager/lib/dsl/ux/loader/jsx-loader.js&comments=false!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/access-loader.js!./node_modules/hap-toolkit/packager/lib/dsl/ux/loader/fragment-loader.js?index=0&type=script!./src/Main/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ "./src/tools/index.js":
/*!****************************!*\
  !*** ./src/tools/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var fetch = $app_require$('@app-module/system.fetch');

var default_options = {
  responseType: 'json'
};

function assignOptions(options) {
  if (!options) {
    return Object.assign(default_options, options);
  } else {
    return default_options;
  }
}

var request = function request(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : assignOptions(options);
  return new Promise(function (resolve) {
    fetch.fetch({
      url: url,
      method: method,
      data: data,
      success: function success(data) {
        if (data.code == '200' && data.data) {
          resolve(data.data);
        } else {
          throw Error("\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF");
        }
      },
      fail: function fail(data, code) {
        throw Error("\u63A5\u53E3\u8FD4\u56DE\u9519\u8BEF");
      }
    });
  });
};

exports.request = request;

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