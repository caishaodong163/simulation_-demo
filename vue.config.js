const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  // webpack 配置进行更细粒度的修改  
  chainWebpack:(config) => {
      config.resolve.alias
        .set('@',resolve('src'))
  },
  devServer:{
    open:true,
    port:8080
  }

}
