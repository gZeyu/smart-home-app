<template>

  <div>
    <div class="vux-demo">
      <div>
        <img :src="img" />
      </div>
      <div>
        <br/>
        <font size="6" color="gray">开发中敬请期待</font>
        <font size="6" color="gray">......</font>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      img: './static/img/developing.gif',
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
  margin: 5%;
}
</style>
