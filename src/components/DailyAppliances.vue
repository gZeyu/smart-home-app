<template>
  <div id="daily-appliances">
    <div class="daily-appliances-card">
      <router-link :to="cardList[0].path">
        <masker style="border-radius: 2px;" :opacity=0.2>
          <div class="daily-appliances-card-img" :style="{backgroundImage: 'url(' + cardList[0].img + ')'}"></div>
          <div slot="content" class="daily-appliances-card-container">
            <div class="daily-appliances-card-icon">
              <img :src=" cardList[0].icon " />
            </div>
            <div class="daily-appliances-card-content ">
              <font weight="bold" size="4.5" color="white">{{cardList[0].title.chinese}}</font>
              <br/>
              <font size="3" color="white">设置温度</font>
              <font size="6" color="white">20</font>
              <font size="3" color="white"> °C</font>
              <br/>
              <font size="3" color="white">模式:制冷</font>
              <font size="3" color="white"> · 室温:22°C · 风速:强力</font>
            </div>
          </div>
        </masker>

      </router-link>
      <grid class="daily-appliances-card-button-bar">
        <grid-item>
          <img slot="icon" :src="cardList[0].buttonIcon.switch">
        </grid-item>
        <grid-item>
          <img slot="icon" :src="cardList[0].buttonIcon.windSpeed">
        </grid-item>
        <grid-item>
          <img slot="icon" :src="cardList[0].buttonIcon.up">
        </grid-item>
        <grid-item>
          <img slot="icon" :src="cardList[0].buttonIcon.down">
        </grid-item>
      </grid>
    </div>
  </div>
</template>  
<script>

import { Masker, Grid, GridItem } from 'vux'
import Bus from '@/utils/bus'

export default {
  title: {
    chinese: '智能家电',
    english: 'Smart Appliances'
  },
  components: {
    Masker,
    Grid,
    GridItem
  },
  data () {
    return {
      headerTitle: '日用电器',
      cardList: [{
        title: {
          chinese: '客厅空调'
        },
        // img: './static/img/daily_appliances.png',
        // icon: './static/icon/daily_appliances.png',
        // path: '/Home/SmartAppliances/DailyAppliances'
        img: './static/img/air_conditioner.png',
        icon: './static/icon/air_conditioner.png',
        buttonIcon: {
          switch: './static/icon/switch.png',
          windSpeed: './static/icon/wind_speed.png',
          up: './static/icon/up.png',
          down: './static/icon/down.png'
        },
        path: '/Home/SmartAppliances/DailyAppliances/AirConditioner'
      }]
    }
  },
  mounted () {
    Bus.$emit('change-header-title', this.headerTitle)
  }
}
</script>  

<style lang="less">
.daily-appliances-card {
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #dad3d3;
}
.daily-appliances-card-img {
  padding-bottom: 40%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}
.daily-appliances-card-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.daily-appliances-card-icon img {
  margin: 10px;
}

.daily-appliances-card-content {
  position: relative;
  align-self: flex-start;
  // color: white;
  // font-size: 5;
  width: 50%;
  top: 10%;
  width: 70%;
  margin-left: 5%;
}

.daily-appliances-card-button-bar {
  position: relative;
  height: 1%;
}
</style>

