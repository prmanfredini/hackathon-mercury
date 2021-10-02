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
  color: #2c3e50;
}

#nav {
 
  a {
    color: #2c3e50;
    text-decoration: none;
    
    &.router-link-exact-active {
      color: #6805c5;
    }
  }
}
</style>