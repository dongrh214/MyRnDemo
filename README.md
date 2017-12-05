# 项目说明
项目通过react-native init MyApp创建会安装最新版react；

运行会报错：Print: Entry, ":CFBundleIdentifier", Does Not Exist

解决方案：[rncahe文件更改][1]

# 本项目启动说明
首次启动 按项目说明配置

后续运行，正常流程，重新yarn或npm install，再执行npm run boost删除第三方依赖，再运行

# 集成第三方库：

react-native-vector-icons：矢量图标库

react-navigation：提供导航及底部tabbar，react-native官方推荐使用

react-redux：热门状态管理库

redux-saga：热门异步处理插件





[1]: https://github.com/dongruihe/rncache