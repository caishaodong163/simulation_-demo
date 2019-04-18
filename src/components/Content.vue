<template>
    <div>
        <div class="content" v-for='item in list' :key='item.id'>
          <div>{{item}}</div>
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