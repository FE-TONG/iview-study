<template>
  <div id="app">
    <!-- <Alert type="success" closable>111111111111111111
      <span slot="close">关闭我</span>
    </Alert>
    
    <Affix>affix 图钉大神图钉</Affix>
    <div>gggggggggggggggggggggggggggggggg</div>
    <Affix :offset-top="80" @on-change="change">
        <span class="demo-affix">固定在距离顶部 100px 的位置</span>
    </Affix> -->
    
    <Icon type="all"></Icon>

    <Avatar icon="pdf" size="large" />

    <auto-complete 
      :data="[]" 
      v-model="value"
      size="large"></auto-complete>
    <div style="height:5000px;"></div>
  </div>
</template>

<script>
import Alert from './components/alert'
import Affix from './components/affix'
import AutoComplete from './components/AutoComplete'
import Icon from './components/icon'
import Avatar from './components/avatar'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      arr: ['太空', '天上', '地球']
    }
  },
  components:{
    Alert,
    Affix,
    AutoComplete,
    Icon,
    Avatar
  },
  methods:{
    change(status){
      log(status)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
