<template>
  <el-card>
    <el-row>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入节气名称" clearable @clear="searchData">
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
      <el-table-column prop="name" align="center" label="节气名称" width="140" />
      <el-table-column prop="day" align="center" label="日期范围" width="140" />
      <el-table-column prop="yuanyin" align="center" label="原因" width="140" />
      <el-table-column prop="shiju" align="center" label="诗句" width="250" />
      <el-table-column prop="jieshao" align="center" label="介绍" />
    </el-table>
    <!--    分页-->
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[1, 7, 15, 24]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="24"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Yaopin',
  data() {
    return {
      tableData: [],
      input: '',
      searchData: {}
    }
  },
  created() {
    axios.get('http://api.tianapi.com/jieqi/index?key=7ddcf716a30672387708b5725268c79e&word=立春')
      .then(res => {
        console.log(res)
        // this.tableData = [...res.data]
        this.tableData = res.data.newslist
      })
    this.search()
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
