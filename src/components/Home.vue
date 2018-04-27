<template>  
  <div id = "home">
    <div id="home-row" v-for="i in 2" :key="i">
      <div id="home-card" style="margin: 10px;overflow: hidden;" v-for="j in 2" :key="j" v-on:click="clickHomeCard(j)">
        <router-link :to="cardList[(i-1)*2 + (j-1)].path">
        <masker style="border-radius: 2px;" :opacity=0.1 >
          <div class="m-img" :style="{backgroundImage: 'url(' + cardList[(i-1)*2 + (j-1)].img + ')'}"></div>
          <div slot="content" class="m-title">
            {{cardList[(i-1)*2 + (j-1)].titleChinese}}
            <br/>
            {{cardList[(i-1)*2 + (j-1)].titleEnglish}}
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
      pageName: 'Home',
      cardList: [{
        titleChinese: '智能安防',
        titleEnglish: 'Intelligent Security',
        img: '/../../static/img/intelligent_security.png',
        path: '/HelloFromVux'
      }, {
        titleChinese: '智能家电',
        titleEnglish: 'Smart Appliances',
        img: '/../../static/img/smart_appliances.png',
        path: '/HelloWorld'
      }, {
        titleChinese: '传感系统',
        titleEnglish: 'Sensing System',
        img: '/../../static/img/sensing_system.png',
        path: '/HelloFromVux'
      }, {
        titleChinese: '电量控制',
        titleEnglish: 'Power Monitoring',
        img: '/../../static/img/power_monitoring.png',
        path: '/HelloWorld'
      }]
    }
  },
  methods: {
    clickHomeCard: function (pageName) {
      console.log('emit-to-app')
      Bus.$emit('click-on-card')
    }
  }
}
</script>  

<style lang="less">
.m-img {
  padding-bottom: 150%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
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

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}

#home-row {
  display: flex;
}
#home-card {
  width: 50%;
  height: 50%;
  bottom: 50%;
  flex: 1;
}
</style>