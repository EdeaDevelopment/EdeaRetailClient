<template>
  <div class="hello">
    <h1>Return value: {{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>{{ $t('message.hello') }}</h2>
    <button v-on:click="testFunction">Test Api Call</button>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable no-unused-vars */
import handler from '../common/components/headers/js/header_cart.js'
export default {
  name: 'hello',
  data: function () {
    return {
      msg: 'not updated'
    }
  },
  methods: {
    testFunction: function (event) {
      console.log(this)
      this.msg = 'Loading'
      handler.getDemo(function (response) {
        console.log(this)
        this.msg = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../common/components/headers/css/header_cart.css" scoped>

</style>
