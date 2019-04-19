<template>
  <div>
    <div class="content" v-for="item in list" :key="item.id">
      <!-- 和A标签类似  :to跳转 item是json字符串的形式   注意引号单引还是双引-->
      <router-link :to='{path:"/user/"+item.author.loginname}'>
        <img :src="item.author.avatar_url" alt="用户头像">
      </router-link>

      <span class="count">
        <em>{{item.reply_count}}</em>/
        <em>{{item.visit_count}}</em>
      </span>
      <!-- 
          分享按钮 tag组件   
          v-bind 后面是可以跟着表达式的(双花括号也可以使用的)
          item.tab(循环出来的变量)
      -->
      <el-tag :type='$tab[item.tab] && $tab[item.tab].type'>
         {{$tab[item.tab] && $tab[item.tab].name}}
      </el-tag>
      <!-- 和A标签类似   :to='{path: "/topic/"+ item.id}' 参数  content内的内容 -->
      <router-link class="title" :to='{path: "/topic/"+ item.id}'>{{item.title}}</router-link>
      <!-- 2019-04-18T03:14:27.309Z   时间格式:item.last_reply_at-->
      <span class="time">
        {{$moment(item.last_reply_at, 'YYYY-MM-DD')
        .startOf('day')
        .fromNow()}}
      </span>
    </div>
  </div>
</template>


<script>
/**
 *  再导航下面的主题内容
 */
export default {
  name: "Content",
  /* 定义变量props可以让父组件通过这些变量传递数据 */
  props: ["list"],
  /* 当前的数据中心 */
  data() {
    return {
      article: []
    };
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 50px;
    border-radius: 50%;
    height: 50px;
  }
  span.count {
    width: 90px;
    text-align: center;
    em:first-child {
      font-size: 1.2em;
      color:purple;
    }
    em:last-child {
      color:grey
    }
  }
  .title {
    width:60%;
  }
  span.time{
    width: 70px;
    text-align: right;
  }
}
</style>
