<template>
  <div id="smart-appliances">
    <div id="smart-appliances-card" v-for="(item, index) in cardList" :key="index">
      <router-link :to="item.path">
        <masker style="border-radius: 2px;" :opacity=0.1>
          <div class="smart-appliances-card-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content">
            <div class="smart-appliances-card-title">
              <div>
                <img :src="item.icon" />
              </div>
              <div>
                {{item.title.chinese}}
              </div>
            </div>
          </div>
        </masker>
      </router-link>
    </div>
  </div>
</template>  
<script>

import { Masker } from 'vux'
import Bus from '@/utils/bus'

export default {
  title: {
    chinese: '智能家电',
    english: 'Smart Appliances'
  },
  components: {
    Masker
  },
  data () {
    return {
      headerTitle: '智能家电',
      cardList: [{
        title: {
          chinese: '智慧照明'
        },
        img: '/../../static/img/smart_lighting.png',
        icon: '/../../static/icon/smart_lighting.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '家庭影院'
        },
        img: '/../../static/img/home_theater.png',
        icon: '/../../static/icon/home_theater.png',
        path: '/Home/SmartAppliances'
      }, {
        title: {
          chinese: '日用电器'
        },
        img: '/../../static/img/daily_appliances.png',
        icon: '/../../static/icon/daily_appliances.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '智慧照明'
        },
        img: '/../../static/img/smart_lighting.png',
        icon: '/../../static/icon/smart_lighting.png',
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
.smart-appliances-card-img {
  padding-bottom: 40%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.smart-appliances-card-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  top: 50%;
  transform: translateY(-50%);
}

#smart-appliances-card {
  // margin: auto;
  // padding: 10px;
  // width: 85%;
  // height: 50%;
  // bottom: 50%;
  // float: 1;
  margin: 10px;
  overflow: hidden;
}
</style>

