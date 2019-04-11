# Cnodejs 快应用

快应用学习项目，用于熟悉快应用开发

快应用相关支持以及学习参见[文档](https://doc.quickapp.cn/)

## 注意事项

快应用开发与传统前端开发类似，但是并不能依赖传统开发经验进行前端开发，各种莫名其妙问题为让你很痛苦，下面是一些经验总结：

### 框架

#### 1. 无法打印log

在`manifest.json`文件中设置 `loglevel`

```json
"config": {
  "logLevel": "debug"
},

```

#### 2. 绘制 `canvas` 代码无效

需要在 `onShow` 生命周期中调用方法，`onCreate` 等觉得可以的均无效



### 样式

#### 1. 绝对定位问题

使用 `<stack>` 组件可以解决绝大部分需要 `position: absolute` 的问题


   
   



<image src="./src/images/demo1.jpg" width="600"></image>