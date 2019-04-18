<!-- 网站顶部组件 -->
<template>
  <div class="header">

    <div class="info">
      <a href="/">
        <img :src='require("@/assets/image/cnodejs.svg")' alt="网站logo" />
      </a>
      <span @click='dialogVisible = true'> 关于本次项目 </span>
    </div>

    <el-dialog 
    title="关于这个项目" 
    :visible.sync="dialogVisible" 
    width="35%">

      <div class="inside-dialog">
        <p>
          作者：林水溶
        </p>
        <!-- 
          1.新开的页面和原来的页面在同一进程中运行，性能受影响
          2.安全漏洞，可以通过顶层窗口连接到不同的网址
          处理：rel=noopener
         -->
        <p class="jishu">
          模仿者：
          <a href="https://blog.csdn.net/qq_20993675" target="_blank" rel="nofollow noopener noreferrer">
            蔡少东
          </a>
        </p>

        <div>
          <p>技术栈：</p>
          <ul>
            <li>Vue</li>
            <li>Vue Router</li>
            <li>ElementUI</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>

    </el-dialog>
  </div>
</template>

<script>
/**
 * 给这个组件起名字，会显示Vue的DevTool里面
 */
export default {
  name: "Header",
  /* 
  * 当前组件的'数据中心'
  */
  data() {
    return {
      dialogVisible: false
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background: #444;
  > div.info {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    a {
      width: 120px;
      height: 50px;
      display: block;
      float: left;
      img {
        padding-top: 10px;
        display: block;
        width: 100%;
      }
    }
    span {
      float: right;
      height: 50px;
      line-height: 50px;
      color: #fff;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
    }
  }
}
</style>

<style lang='scss'>
.header {
  .el-dialog__body {
    padding-top: 10px;
    padding-bottom: 0;
    .inside-dialog {
      p {
        margin: auto;
        &.jishu{
          margin-bottom:10px;
        }
      }
      .el-icon-star-off::before {
        color: #eb2f96;
      }
    }
  }
}
</style>

