### 如何使用npm安装私有git
* 安装 npm install git+https://github.com/elon-hu/elon-libs.git
* 带密码的私有仓库 npm install git+https://username:password@bitbucket.org/elonproject/private_note.git
* 更新版本  npm install
* 锁定版本 npm install git+https://github.com/elon-hu/elon-libs.git#v1.0.1 #后面的是tag或commit的md5码

### react组件使用

* 使用import引入react组件需要修改create-react-app配置
* 需要修改loader配置让编译器把包里面的东西也包含进去
* config/path.js 
```javascript
  appSrc: resolveApp('src'),
  newSrc: [ // 编译时把这些文件夹包含进去
    resolveApp('src'),
    resolveApp('node_modules/elon-libs'), // npm install
    resolveApp('node_modules/_elon-libs@0.1.0@elon-libs') // cnpm install
  ],
  yarnLockFile: resolveApp('yarn.lock'),
```
* 修改 config/webpack.config.dev.js 和 config/webpack.config.prod.js
```javascript
  // module 里的loader的include配置全部修改
  // before
    include: paths.appSrc
  // after 
    include: paths.newSrc
```