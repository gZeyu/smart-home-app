<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../static/icon/home.png">
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../../static/icon/find.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../../static/icon/user.png">
        <span slot="label">User</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<style>
.add {
  height: 80px;
  width: 80px;
}
</style>  
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'Footer',
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>  