<template>
  <el-card>
    <!--table表格-->
    <el-table
      :data="tableData.slice((page-1)*limit , page * limit)"
      size="mini"
      border
      :header-cell-style="{background: 'rgb(152,185,234)',color:'black'}"
    >
      <el-table-column prop="id" align="center" label="序号" width="50" />
      <el-table-column prop="title" align="center" label="文章标题" width="150" />
      <el-table-column prop="description" align="center" label="文章描述" width="400" />
      <el-table-column prop="source" align="center" label="文章来源" width="200" />
      <el-table-column prop="picUrl" align="center" label="封面图片" width="300">
<!--        <template slot-scope="scope">-->
<!--          <a-->
<!--            :href="scope.row.picUrl"-->
<!--            target="_blank"-->
<!--          >{{ scope.row.picUrl }}</a>-->
<!--        </template>-->
      </el-table-column>
      <el-table-column prop="url" align="center" label="文章地址" width="300">
        <template slot-scope="scope">
          <a
            :href="scope.row.url"
            target="_blank"
          >{{ scope.row.url }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="ctime" align="center" label="发布时间" />
    </el-table>
    <!--    分页-->
    <el-pagination
      :current-page="page"
      :page-sizes="[3, 6, 10]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="10"
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
      total: 10,
      page: 1, // 当前页数第一页
      limit: 3 // 每页十条
    }
  },
  created() {
    axios.get('http://api.tianapi.com/travel/index?key=7ddcf716a30672387708b5725268c79e&num=10')
      .then(res => {
        console.log(res)
        // this.tableData = [...res.data]
        this.tableData = res.data.newslist
      })
  },
  methods: {
    handleSizeChange(val) {
      console.log(val)
      this.limit = val
      this.page = 1
    },
    handleCurrentChange(val) {
      console.log(val)
      this.page = val
    }
  }
}
</script>
