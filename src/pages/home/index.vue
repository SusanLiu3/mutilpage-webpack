<template>
  <div>
    <h3>我是Index 页面55</h3>
    <p>{{msg}}</p>
    <img src="@/images/1.png"/>
    <img src="@/images/2.png">
    <detail></detail>
  </div>
</template>
<script>
import Detail from "../components/detail.vue";
var sayHi = () => {
  console.log("hi,oo");
};
export default {
  data() {
    return {
      msg: "hello world",
    };
  },
  components: {
    detail: Detail
  },
  created() {
    sayHi();
  },
  methods: {}
};
</script>
<style scoped>
</style>