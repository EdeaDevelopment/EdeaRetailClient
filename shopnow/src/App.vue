<template>
  <div id="app">
    <my-header></my-header>    
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import MyHeader from '@/components/Headers/Header'
export default {
  name: 'app',
  components: {
    MyHeader
  },
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width,initial-scale=1' }
    ]
  }
}
</script>

<style lang='sass'>
@import 'common/sass/base.scss';

#app 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  
</style>
