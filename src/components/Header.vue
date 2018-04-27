<template>
  <div>
    <x-header id="m-header" :left-options="{backText: ''}">主菜单</x-header>
    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
    </div>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem } from 'vux'

export default {
  name: 'AppHeader',
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  }
}
</script>

<style>
#m-header {
  position: relative;
  height: 47px;
  width: 100%;
  z-index: 500;
  overflow: hidden;
}
.overwrite-title-demo {
  margin-top: 5px;
}
</style>