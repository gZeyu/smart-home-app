<template>
  <div id="app">
    <app-header></app-header>
    <div class="container" style="background-color:#f5f5f9;">
      <div>
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppFooter
  },
  data () {
    return {}
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
