<template lang="html">
  <div class='tableBorder'>
 <el-table
    ref="multipleTable"
    :data="tableData"
    stripe
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
        fixed
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      stripe
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      stripe
      show-overflow-tooltip>
    </el-table-column>


     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>

  </el-table>      

<el-pagination
  
  layout="prev, pager, next"
  :total="50" 
  current-page="1"
  @current-change="changePage">
</el-pagination>
  <el-dialog title="收货地址" :visible.sync="edit">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="edit = false">取 消</el-button>
    <el-button type="primary" @click="edit = false">确 定</el-button>
  </div>
</el-dialog>
</div>   
</template>

<script>
  /* eslint-disable */
//import Icon from '../components/Icon';
//import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'table',

  data() {
    return {  
    edit:false,
    formLabelWidth:150,
    currentPage:"1",
    form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      
    };
  },
  components: {
    
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    changePage(data){
      console.log(data);
    },
    // ...mapActions([
    //   'updateQrCodeIsShow',
    //   'saveUserLog',
    // ]),
     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
    handleClick(row) {
        console.log(row);
        this.edit=!this.edit;
      }
  },
};
  /* eslint-disable */
</script>

<style scoped>
.el-input{
      position: relative;
    font-size: 14px;
    display: inline-block;
    width: 300px;
    float: left;
}
.el-select{
  float: left;
      width: 300px;
}
</style>
