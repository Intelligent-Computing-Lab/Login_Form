<template>
  <el-card>
    <el-row>
      <el-col :span="8">
        <el-input v-model="input" placeholder="请输入日期" clearable @clear="check">
          <el-button slot="append" icon="el-icon-search" style="font-size: 12px;color: white;background: rgb(42,119,234)" @click="check">搜索</el-button>
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
      <el-table-column prop="area" align="center" label="地区" width="70">
        <!--        <template slot-scope="{row}">-->
        <!--          <span>{{ row.area }}</span>-->
        <!--        </template>-->
      </el-table-column>
      <el-table-column prop="area_code" align="center" label="地区代码" width="90" />
      <el-table-column prop="so2" align="center" label="二氧化硫时均，μg/m³" width="150" />
      <el-table-column prop="o3" align="center" label="臭氧时均，μg/m³" width="130" />
      <el-table-column prop="pm2_5" align="center" label="颗粒物时均（粒径小于等于2.5μm） μg/m³" width="180" />
      <el-table-column prop="primary_pollutant" align="center" label="首要污染物" width="130" />
      <el-table-column prop="co" align="center" label="一氧化碳时均，mg/m³" width="150" />
      <el-table-column prop="num" align="center" label="污染数" width="70" />
      <el-table-column prop="no2" align="center" label="二氧化氮时均，μg/m³" width="150" />
      <el-table-column prop="pm10" align="center" label="颗粒物（粒径小于等于10μm）μg/m³" width="180" />
      <el-table-column prop="o3_8h" align="center" label="臭氧小时滑动平均" width="150" />
      <el-table-column prop="time" align="center" label="更新时间" width="120" />
      <el-table-column prop="quality" align="center" label="空气质量指数类别" />
    </el-table>
    <!--        分页-->
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="140"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Kongqi',
  data() {
    return {
      tableData: [], // 存储列表数组
      input: ''
    }
  },
  created() {
    axios.get('http://api.tianapi.com/aqi/index?key=7ddcf716a30672387708b5725268c79e&area=上海')
      .then(res => {
        console.log(res)
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
