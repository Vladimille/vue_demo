<template>
  <div class="foot-wrapper">
    <div class="foot-box">
      <div>author: luozhengang</div>
      <div @click="onclick">域名备案位</div>
      <div>email: 939945825@qq.com</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
    };
  },
  methods:{
    onclick(){
      console.log('wh:', window.innerHeight)
      console.log('bh:', document.body.clientHeight)
    }
  },
  computed: {
    footerAuto: function(){
      let fixed = false
      if (this.bh < this.wh) {
        fixed = true
      } else {
        fixed = false
      }
      return {
        fixed
      }
    }
  }
}
 
</script>
<style lang="scss" scoped>
.foot-wrapper{
  background-color: #fff;
  height: 50px;
  width: 100%;
  .foot-box{
    background-color: #fff;
    height: 49px;
    width: 1280px;
    margin: 0 auto;
    border-top: 1px #bbb solid;
    display: flex;
    justify-content: space-between;
    line-height: 49px;
    font-size: 18px;
  }
}
.fixed{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
