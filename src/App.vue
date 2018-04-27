<template>
  <div id="app">
  <app-header></app-header>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
    </div>
  <app-footer></app-footer> 
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppFooter from './components/Footer'
import Bus from './components/bus'
export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {}
  },
  methods: {
    setPage: function (pageName) {
      console.log(pageName)
    },
    created () {
      Bus.$on('aaa', (pageName) => {
        console.log('App.vue')
      })
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

html {
  height: 100%;
}
html body {
  height: 100%;
  overflow: hidden;
}
html body .container {
  position: absolute;
  top: 46px;
  bottom: 50px;
  width: 100%;
  overflow-y: auto;
}
</style>
