<template>
  <div id="user">
    <div id="user-card">
      <masker style="border-radius: 2px;" :opacity=0.1>
        <div class="user-card-img blur" :style="{backgroundImage: 'url(' + user.userProfileRectangular + ')'}"></div>
        <div slot="content" class="user-card-container">
          <div class="user-profile">
            <img :src="user.userProfileCircle" />
          </div>
          <div class="user-name">
            <font size="5" color="white">{{user.name}}</font>
            <br/>
            <font size="3" color="white">已有</font>
            <font size="5" color="white">{{deviceNumber}}</font>
            <font size="2" color="white">个设备接入使用</font>
          </div>
        </div>
      </masker>
    </div>
    <group>
      <cell title="我的设备" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="icon.device">
      </cell>
      <cell title="场景选择" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="icon.scene">
      </cell>
    </group>
    <group>
      <cell title="在线商城" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="icon.store">
      </cell>
    </group>
    <group>
      <cell title="通用设置" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" :src="icon.setting">
      </cell>
    </group>
  </div>
</template>  
<script>

import { Masker, Group, Cell } from 'vux'
import Bus from '@/utils/bus'

export default {
  title: {
    chinese: '智能家电',
    english: 'Smart Appliances'
  },
  components: {
    Masker,
    Group,
    Cell
  },
  data () {
    return {
      headerTitle: '个人中心',
      user: {
        name: '互联网+',
        userProfileCircle: '/static/img/user_profile_circle.png',
        userProfileRectangular: '/static/img/user_profile_rectangular.png'
      },
      deviceNumber: '18',
      icon: {
        device: '/static/icon/device.png',
        scene: '/static/icon/scene.png',
        store: '/static/icon/store.png',
        setting: '/static/icon/setting.png'
      }
    }
  },
  mounted () {
    Bus.$emit('change-header-title', this.headerTitle)
  }
}
</script>  

<style lang="less">
#user-card {
  margin: 10px;
  overflow: hidden;
}

.user-card-img {
  padding-bottom: 50%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.user-card-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.user-profile img {
  border-radius: 50%;
  border: 4px solid #ececec;
}

.user-profile {
  margin: 10px;
}

.blur {
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}
</style>

