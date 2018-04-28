<template>
  <div id="air-conditioner">
    <div id="air-conditioner">
      <masker :opacity=0.1>
        <div class="air-conditioner-img blur" :style="{backgroundImage: 'url(' + airConditionerImg + ')'}"></div>
        <div slot="content" class="air-conditioner-container">
          <div class="air-conditioner-icon">
            <img :src="icon.airConditioner" />
            <br/>
            <font size="3" color="white">XX空调</font>
          </div>
          <div class="air-conditioner-show">
            <font size="7" color="white">22°C</font>
            <div>
              <font size="3" color="white">- 风速 : auto 自动</font>
              <br/>
              <font size="3" color="white">- 风向 : 下</font>
              <br/>
              <font size="3" color="white">- 模式 : 制冷</font>
            </div>
          </div>
        </div>
      </masker>
    </div>
    <grid style="height:auto;margin: 10px;border-radius: 10px;border: 1px solid #dad3d3;">
      <grid-item>
        <img slot="icon" :src="icon.dec">
      </grid-item>
      <grid-item>
        <!-- <font color="black">温度</font>f -->
        <img slot="icon" :src="icon.temperature">
      </grid-item>
      <grid-item>
        <img slot="icon" :src="icon.inc">
      </grid-item>
    </grid>
    <grid :cols="3" style="margin: 10px;border-radius: 10px;border: 1px solid #dad3d3;">
      <grid-item>
        <font class="grid-center" size="3" color="black">关</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">模式</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">设置</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">风速</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">风向</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">风扫风</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">定时</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">睡眠</font>
      </grid-item>
      <grid-item>
        <font class="grid-center" size="3" color="black">更多功能</font>
      </grid-item>
    </grid>

  </div>
</template>  
<script>

import { Masker, Grid, GridItem, Group } from 'vux'
import Bus from '@/utils/bus'

export default {
  title: {
    chinese: '智能家电',
    english: 'Smart Appliances'
  },
  components: {
    Masker,
    Grid,
    GridItem,
    Group
  },
  data () {
    return {
      headerTitle: '客厅空调',
      airConditionerImg: './static/img/air_conditioner_control_panel.png',
      user: {
        name: '互联网+',
        userProfileCircle: './static/img/user_profile_circle.png',
        userProfileRectangular: './static/img/user_profile_rectangular.png'
      },
      icon: {
        airConditioner: './static/icon/air_conditioner.png',
        inc: './static/icon/inc.png',
        dec: './static/icon/dec.png',
        temperature: './static/icon/temperature.png'
      }
    }
  },
  mounted () {
    Bus.$emit('change-header-title', this.headerTitle)
  }
}
</script>  

<style lang="less">
.grid-center {
  display: block;
  text-align: center;
  color: #666;
  height: 100%;
}
.weui-grids {
  background-color: #fff;
}

#air-conditioner {
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
}

.air-conditioner-img {
  padding-bottom: 50%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.air-conditioner-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.air-conditioner-icon {
  padding: 5%;
  // position: relative;
  top: 1%;
  align-self: flex-start;
}
.air-conditioner-show {
  position: absolute;
  top: 0;
  left: 30%;
}

.blur {
  // -webkit-filter: blur(1px);
  // -moz-filter: blur(1px);
  // -ms-filter: blur(1px);
  filter: blur(0.5px);
}
</style>

