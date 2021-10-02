<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
     <AppBottomBar/>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar.vue"
import AppBottomBar from "./components/shared/AppBottomBar.vue"

export default {
  name: 'App',

  components : {
    AppTopBar,
    AppBottomBar
  }

};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  padding-bottom: 65px;
}

#nav {
 
  a {
    color: #ffffff;
    text-decoration: none;
    
    &.router-link-exact-active {
      color: #FF3D00;
    }
  }
}
</style>