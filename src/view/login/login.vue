<template>
  <div class="hello"> 
     <p>{{new Date()|moment("YY-MM-DD")}}</p>
     <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
     </el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      input: "",
      value1: "",
    }
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
</style>
