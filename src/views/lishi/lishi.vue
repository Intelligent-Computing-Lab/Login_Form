<template>
  <el-card>
    <el-row>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入时间" clearable @clear="getUserList">
          <el-button slot="append" icon="el-icon-search" style="font-size: 12px;color: white;background: rgb(42,119,234)" @click="getUserList">搜索</el-button>
        </el-input>
      </el-col>
    </el-row>
    <!--table表格-->
    <el-table
      :data="tableData"
      size="mini"
      border
      :header-cell-style="{background: 'rgb(152,185,234)',color:'black'}"
    >
      <el-table-column prop="lsdate" align="center" label="时间" width="800"></el-table-column>
      <el-table-column prop="title" align="center" label="事件"></el-table-column>
    </el-table>
    <!--    分页-->
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script>
import axios from "axios";

export default {
  name: 'Yaopin',
  data() {
    return {
      tableData: [],
      input: ''
    }
  },
  created() {
    axios.get('http://api.tianapi.com/lishi/index?key=7ddcf716a30672387708b5725268c79e&date=0101')
      .then(res => {
        console.log(res)
        // this.tableData = [...res.data]
        this.tableData = res.data.newslist
      })
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
