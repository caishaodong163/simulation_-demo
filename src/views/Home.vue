<template>
  <div class="home">
    <!-- v-model绑定的代表第一个显示什么（根据name来决定的） -->
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="全部" name="all">
        <Content :list='list' />
      </el-tab-pane>
      <el-tab-pane label="精华" name="good">
        <Content :list='list' />
      </el-tab-pane>
      <el-tab-pane label="分享" name="share">
        <Content :list='list' />
      </el-tab-pane>
      <el-tab-pane label="问答" name="ask">
        <Content :list='list' />
      </el-tab-pane>
      <el-tab-pane label="招聘" name="job">
        <Content :list='list' />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 主页
 */
import Content from "@/components/Content";
import { getTopics } from "@/utils/api";

export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   * return 出的数据都是接口要的参数
   * limit 这个限制返回条数的参数，是后端需要知道的，所以要传过去
   */
  name: "home",
  data() {
    return {
      page: 1,
      limit: 20,
      tab: "all",
      list: [],
      store: {} // 存储所有Tab对应的数据，因为切换Tab后就没必要重新以limit:20加载数据。该组件的内部转
    };
  },
  /**
   *  任何属于此组件的方法都定义在这里
   */
  methods: {
    /* 当前页面的封装 */
    /* 第一个getTopics 是方法，第二个是引入解构出来 */
    /* 第二个getTopics 里面的数据是API文件内data (后端需要的参数)*/
    getTopics() {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab
      }).then(res => {
        console.log(res, "resreressss");
        this.list = res.data;
        this.limit = this.limit + 10; //请求数据增加(方便下一次请求的时候数据增加)
        const store = this.store; //当前页面的存储，将数据存到对应key中  (也就是tab切换的时候name)
        store[this.tab] = {
          limit: this.limit,
          data: res.data
        };
      });
    },
    /**
     * 当前Tab变化时判断Store里是否已经存储数据。
     * 是：拉出来，设置到state中
     * 否：重新获取数据
     */
    tabChanged() {
      const store = this.store;
      // 如果未存储当前Tab的数据，重新获取
      if (!store[this.tab]) {
        this.limit = 20;
        this.list = [];
        this.getTopics();
        return;
      }

      this.list = store[this.tab].data;
      this.limit = store[this.tab].limit; /* 页面暂存的数据还是给了返回出去的数据 */
    }
  },
  /* 页面初始的时候调取接口 */
  created() {
    this.getTopics();
  },
  components: {
    Content
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 75%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px;
}
</style>
