<template>
  <el-card>
    <el-row>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入日期" clearable @clear="searchChange">
          <el-button slot="append" icon="el-icon-search" style="font-size: 12px;color: white;background: rgb(42,119,234)" @click="searchChange">搜索</el-button>
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
      <el-table-column prop="gregoriandate" align="center" label="公历日期" width="140" />
      <el-table-column prop="lunardate" align="center" label="农历日期" width="140" />
      <el-table-column prop="lunar_festival" align="center" label="农历节日" width="140" />
      <el-table-column prop="festival" align="center" label="公历节日" width="140" />
      <el-table-column prop="fitness" align="center" label="适宜" width="140" />
      <el-table-column prop="taboo" align="center" label="不宜" width="140" />
      <el-table-column prop="tiangandizhiyear" align="center" label="天干地支年" width="140" />
      <el-table-column prop="tiangandizhimonth" align="center" label="天干地支月" width="140" />
      <el-table-column prop="tiangandizhiday" align="center" label="天干地支日" width="140" />
      <el-table-column prop="shengxiao" align="center" label="生肖" width="140" />
      <el-table-column prop="lubarmonth" align="center" label="农历月" width="140" />
      <el-table-column prop="lunarday" align="center" label="农历日" />
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
import axios from 'axios'

export default {
  name: 'Huangli',
  data() {
    return {
      tableData: [],
      input: ''
    }
  },
  created() {
    axios.get('http://api.tianapi.com/lunar/index?key=7ddcf716a30672387708b5725268c79e&date=2022-02-10')
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
