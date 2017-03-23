<template>
  <div id="app">
    <loading v-show="loadingState"></loading>
    <NavHeader v-show="isNavShow"></NavHeader>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <FooterView v-show="footerState"></FooterView>
  </div>
</template>

<script>
import NavHeader from './components/Nav.vue';
import FooterView from './components/Footer.vue';
import {mapActions,mapGetters} from 'vuex';


export default {
  computed:mapGetters([
    'isNavShow',
    'loadingState',
    'footerState'
  ]),
  components:{
    NavHeader,
    FooterView
  },
  watch:{
    $route(to){
      /*if(to.path == '/user-info'){
        this.$store.dispatch('hideNav');
      }else{
        this.$store.dispatch('showNav');
      }
      if(to.path.indexOf('article') != -1){
        this.$store.dispatch('hideFooter');
      }else{
        this.$store.dispatch('showFooter');
      }*/
      var path = to.path.substr(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  methods:{
    headerChange(path){
      if(path=='user-info' || path.indexOf('article')!=-1){
        this.$store.dispatch('hideNav');
      }else{
        this.$store.dispatch('showNav');
      }
    },
    footerChange(path){
      if(path.indexOf('article')!=-1){
        this.$store.dispatch('hideFooter');
      }else{
        this.$store.dispatch('showFooter');
      }
    }
  }
}
</script>

<style>
@import url('./assets/css/index.css');

</style>
