<template>
  <div id="home">
    <div id="home-row" v-for="i in 2" :key="i">
      <div id="home-card" v-for="j in 2" :key="j">
        <router-link :to="cardList[(i-1)*2 + (j-1)].path">
          <masker style="border-radius: 2px;" :opacity=0.1>
            <div class="home-card-img" :style="{backgroundImage: 'url(' + cardList[(i-1)*2 + (j-1)].img + ')'}"></div>
            <div slot="content" class="home-card-title">
              {{cardList[(i-1)*2 + (j-1)].title.chinese}}
              <br/> {{cardList[(i-1)*2 + (j-1)].title.english}}
            </div>
          </masker>
        </router-link>
      </div>
    </div>
  </div>
</template>  
<script>

import { Masker } from 'vux'
import Bus from '@/utils/bus'
export default {
  components: {
    Masker
  },
  data () {
    return {
      path: '/HelloFromVux',
      headerTitle: '主菜单',
      cardList: [{
        title: {
          chinese: '智能安防',
          english: 'Intelligent Security'
        },
        img: './static/img/intelligent_security.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '智能家电',
          english: 'Smart Appliances'
        },
        img: './static/img/smart_appliances.png',
        path: '/Home/SmartAppliances'
      }, {
        title: {
          chinese: '传感系统',
          english: 'Sensing System'
        },
        img: './static/img/sensing_system.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '电量控制',
          english: 'Power Monitoring'
        },
        img: './static/img/power_monitoring.png',
        path: '/HelloFromVux'
      }]
    }
  },
  mounted () {
    Bus.$emit('change-header-title', this.headerTitle)
  }
}
</script>  

<style lang="less">
#home-card {
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  width: 50%;
  height: 50%;
  bottom: 50%;
  flex: 1;
}

#home-row {
  display: flex;
}
.home-card-img {
  padding-bottom: 160%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.home-card-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
</style>