<template>
  <div class="hello"> 
      <button @click="show = !show">toggle</button>
      <transition name="fad33de">
        <p v-if="show">hello</p>
      </transition>
      <input v-focdddus placeholder="请输入">
  </div>
</template>

<script>
export default {  
  data () {
    return {
      show: false,
      msg: 'Welcome to Your Vue.js App',
      input: "",
      value1: "",
    }
  },
  directives: {
    focdddus: {
      inserted(el) {
        console.log(el) 
        el.focus()
      }
    }
  },
  methods: {
    handleClickDiv3() {
      console.log(3)
    },
    handleClickDiv2() {
      console.log(2)
    },
    handleClickDiv1() {
      console.log(1)
    }
  },
  components: {
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .fad33de-enter-active, .fad33de-leave-active {
  transition: opacity .5s;
}
.fad33de-enter, .fad33de-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
