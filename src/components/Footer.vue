<template>
  <div>
    <tabbar id="m-tabbar">
      <tabbar-item selected :link="homePath">
        <img slot="icon" :src="icon.home">
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item show-dot :link="explorePath">
        <img slot="icon" :src="icon.explore">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item :link="userPath">
        <img slot="icon" :src="icon.user">
        <span slot="label">User</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style>
#m-tabbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.add {
  height: 80px;
  width: 80px;
}
</style>  
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'AppFooter',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      homePath: '/Home',
      icon: {
        home: './static/icon/home.png',
        explore: './static/icon/explore.png',
        user: './static/icon/user.png'
      },
      explorePath: '/Explore',
      userPath: '/User',
      msg: ''
    }
  }
}
</script>  