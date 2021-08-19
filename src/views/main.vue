<template>
  <div class="main-wrapper">
    <div class="left-menu">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-aim"></i>
          <span>过滤</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">标签</template>
          <el-menu-item index="1-1-1">选项1</el-menu-item>
          <el-menu-item index="1-1-2">选项2</el-menu-item>
          <el-menu-item index="1-1-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">优先级</template>
          <el-menu-item index="1-2-1">选项1</el-menu-item>
          <el-menu-item index="1-2-2">选项2</el-menu-item>
          <el-menu-item index="1-2-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-edit"></i>
        <span slot="title">新建todo</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-s-tools"></i>
        <span slot="title">标签设置</span>
      </el-menu-item>
    </el-menu>
    </div>
    <div class="right-list">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="截止日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="内容">
          <template slot-scope="scope">
            <span>{{ scope.row.text }}</span>
          </template>
        </el-table-column>
        <el-table-column 
          label="标签"
          width="180">
          <template slot-scope="scope">
            <el-tag class="tags" v-for="item in scope.row.tags" :key="item">{{item}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column 
          label="操作"
          width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签1','标签2','标签3']
        }, {
          date: '2016-05-04',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签1','标签2']
        }, {
          date: '2016-05-01',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签2','标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }, {
          date: '2016-05-03',
          name: '王小虎',
          text: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          tags: ['标签3']
        }]
    };
  },
  methods:{
  }
};
 
</script>
<style lang="scss" scoped>
.main-wrapper{
  width: 1280px;
  display: flex;
  .left-menu{
    width: 200px;
  }
  .right-list{
    width: 1080px;
    .tags{
      margin: 0 3px;
    }
  }
}
</style>