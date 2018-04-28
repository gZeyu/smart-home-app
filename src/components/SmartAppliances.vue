<template>
  <div id="smart-appliances">
    <div class="smart-appliances-card" v-for="(item, index) in cardList" :key="index">
      <router-link :to="item.path">
        <masker style="border-radius: 2px;" :opacity=0.1>
          <div class="smart-appliances-card-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="smart-appliances-card-container">
            <div class="smart-appliances-card-icon">
              <img :src=" item.icon " />
            </div>
            <div class="smart-appliances-card-title ">
              {{item.title.chinese}}
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
        img: '/static/img/smart_lighting.png',
        icon: '/static/icon/smart_lighting.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '家庭影院'
        },
        img: '/static/img/home_theater.png',
        icon: '/static/icon/home_theater.png',
        path: '/Home/SmartAppliances'
      }, {
        title: {
          chinese: '日用电器'
        },
        img: '/static/img/daily_appliances.png',
        icon: '/static/icon/daily_appliances.png',
        path: '/HelloFromVux'
      }, {
        title: {
          chinese: '智慧照明'
        },
        img: '/static/img/smart_lighting.png',
        icon: '/static/icon/smart_lighting.png',
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
.smart-appliances-card {
  margin: 10px;
  overflow: hidden;
  border-radius:10px;
}
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
.smart-appliances-card-container {
  position: relative;
  top: 15%;
  bottom: 15%;
  left: 0;
  width: 20%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.smart-appliances-card-icon img {
  margin: 10px;
}

.smart-appliances-card-title {
  color: white;
  font-size: 5;
}
</style>

