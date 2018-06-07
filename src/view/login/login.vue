<template>
  <div class="hello"> 
     <p>{{new Date()|moment("YY-MM-DD")}}</p>
     <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
     </el-date-picker>
     <div class="div1" @click="handleClickDiv1">
       <div class="div2" @click.self="handleClickDiv2">
         <div class="div3" @click.prevent.self="handleClickDiv3">发的</div>
       </div>
     </div>
     <login1></login1>
     <login2></login2>
      <div style="width: 100px; height: 100px;background: green;cursor: pointer;" @click="handleClickTest">点击试试</div>
     <el-select v-model="value8" filterable placeholder="请选择" :filter-method="ddddddddd">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div>{{value9|filters1}}</div>
  </div>
</template>

<script>
import test from "@/service/test"
export default {  

  data () {
    return {
      value8: '',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      dialogVisible: true,
      msg: 'Welcome to Your Vue.js App',
      input: "",
      value1: "222",
      value9: "9999",
    }
  },
  watch: {
    value8: function() {
     
    },
    
     
    value1:{
      handler(val, val2) {
        console.log(val)
        console.log(val2)
      },
      deep: true
    }
  },
  filters: {
    filters1(value) {
      return value+1
    },
  },
  methods: {
    ddddddddd(val) {
      this.options
    },
    handleClickDiv3() {
      console.log(3)
    },
    handleClickDiv2() {
      console.log(2)
    },
    handleClickDiv1() {
      console.log(1)
    },
    handleClickTest() {
      console.log(this.$data)
      console.log(this.$el)
      console.log(this.$parent)
      console.log(this.$root)
      console.log(this.$children)
      console.log(this.$options)
      test()
    },
    handlechange() {
      console.log(2222)
    },
  },
  components: {
    "login1": require('./login1'),//拟设立基金详情头部
    "login2": require('./login2'),//拟设立基金详情头部
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.div1 {
  width: 200px;
  height: 200px;
  background: red;
}
.div2 {
  width: 100px;
  height: 200px;
  background: green;
}
.div3 {
  width: 50px;
  height: 50px;
  background: orange;
}
</style>
