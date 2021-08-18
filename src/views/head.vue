<template>
  <div class="header-wrapper">
    <div class="header-box">
      <div class="left-title">todoList</div>
      <div class="right-box">
        <i class="el-icon-s-custom"></i>
        <span class="user-number">17370837635</span>
        <el-button round>登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
  methods:{
  }
};
 
</script>
<style lang="scss" scoped>
.header-wrapper{
  background-color: #fff;
  height: 50px;
  width: 100%;
  .header-box{
    background-color: #fff;
    height: 49px;
    width: 1280px;
    margin: 0 auto;
    border-bottom: 1px #ccc solid;
    display: flex;
    justify-content: space-between;
    .left-title{
      line-height: 49px;
      font-size: 24px;
      margin-left: 6px;
    }
    .right-box{
      line-height: 49px;
      font-size: 18px;
      margin-right: 6px;
      display: flex;
      align-items: center;
      .el-icon-s-custom{
        font-size: 26px;
        margin-right: 6px;
      }
      .user-number{
        margin-right: 10px;
      }
    }
  }
}
</style>