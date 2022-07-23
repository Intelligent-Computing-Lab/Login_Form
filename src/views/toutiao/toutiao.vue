<template>
  <el-card>
    <!--table表格-->
    <el-table
      :data="tableData"
      size="mini"
      border
      :header-cell-style="{background: 'rgb(152,185,234)',color:'black'}"
    >
      <el-table-column prop="title" align="center" label="新闻标题" width="200" />
      <el-table-column prop="description" align="center" label="新闻描述" width="400" />
      <el-table-column prop="picUrl" align="center" label="文章来源" width="300">
        <template slot-scope="scope">
          <a
            :href="scope.row.picUrl"
            target="_blank"
          >{{ scope.row.picUrl}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="url" align="center" label="封面图片" width="400">
        <template slot-scope="scope">
          <a
            :href="scope.row.url"
            target="_blank"
          >{{ scope.row.url}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="source" align="center" label="文章地址" width="200" />
      <el-table-column prop="ctime" align="center" label="发布时间" />
    </el-table>
    <!--    分页-->
    <el-pagination
      :current-page="page"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
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
      total: 100,
      page: 1, // 当前页数第一页
      limit: 5 // 每页十条
    }
  },
  created() {
    axios.get('http://api.tianapi.com/topnews/index?key=7ddcf716a30672387708b5725268c79e&num=10')
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
