<template>
  <Layout>
    <template >
      <router-link to="/"><h1 id="title">{{title}}</h1></router-link>
      <router-link to="/join"><span id="join">{{join}}</span></router-link>
      <router-link to="/login"><span id="login">{{login}}</span></router-link>
    </template>
    <template>
      <ul class="menu">
        <ul class="menu">
          <li v-for="i of sidebars" :key="i.menu">
            <router-link :to="i.link">{{i.menu}}</router-link>
          </li>
        </ul>
      </ul>

    </template>
    <template #content>
      <router-view></router-view>
    </template>
    <template >
      <h3 id="footer">{{footer}}</h3>
    </template>
  </Layout>
</template>

<script>
  import Layout from "../user/MyPage"
  export default {
    components: {Layout},
    data() {
      return {
        sidebars: [
          {menu: '회원등록', link: '/register'},
          {menu: '회원검색', link: '/search'},
          {menu: '회원정보수정', link: '/update'},
          {menu: '기구목록', link: '/list'},
          {menu: '회원수', link: '/vuexCounter'}
        ]
      }
    },
    created () {
      //can use Data(this.title, this.titleComputed ...), events(vm.$on, vm.$once, vm.$off, vm.$emit)
      //don't use $el
    },
    methods:{
      menu(i){
        switch (i) {
          case '회원등록':
            alert('0')
            break;
          case '회원목록':
            alert('1')
            break;
          case '회원정보검색':
            alert('2')
            break;
          case '기구목록':
            alert('3')
            break;
          case '회원수':
            alert('4')
            break;
        }
      }
    }
  }
</script>

<style scoped>
  ul.name{
    position: relative;
    padding: 5px;
    list-style: none;
    font-style: italic;
  }
  #title{width: 300px;margin: 0 auto}
  #login{margin-right: 50px; float: right}
  #join{margin-right: 50px; float: right}
  #footer{width: 300px; margin: 0 auto}
</style>