
<template>
 <div id="app">
<link href="https://unpkg.com/animate.css@3.5.1/animate.min.css" rel="stylesheet" type="text/css"> 
<link href="https://dperrymorrow.github.io/vue-animate-transitions/dist/vue-animate-transitions.min.css" rel="stylesheet" type="text/css">  
 
    <loading :show="show" :label="label"></loading>
    <my-header></my-header>
     <transition name="fadeInRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import loading from 'vue-full-loading'
import MyHeader from '@/components/Headers/Header'

export default {
  name: 'app',
  data() {
    return {
      label: this.$t('message.loading')
    }
  },
  components: {
    MyHeader,
    loading
  },
  computed: {
    show() {
      return this.$store.getters.loading
    }
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ]
  }
}
</script>

<style lang='scss'>
@import 'common/sass/base.scss';

// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   opacity: 0
// }

// .slide-fade-enter-active {
//   transition: all .3s ease;
// }
// .slide-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
// .slide-fade-enter, .slide-fade-leave-to
// /* .slide-fade-leave-active below version 2.1.8 */ {
//   transform: translateX(10px);
//   opacity: 0;
// }

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
} 
  

  
</style>
