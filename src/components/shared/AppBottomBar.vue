<template>
  <v-bottom-navigation
    id="nav"
    grow
    fixed
  >
        
        <v-btn>
            <router-link to="/">
              <v-icon>mdi-home</v-icon><br>
              <span>Home</span>  
            </router-link>
        </v-btn>
        
        <v-btn>
            <router-link to="/jogos">
            <v-icon>mdi-heart</v-icon><br>
                <span>Jogos</span>
            </router-link>
        </v-btn>

        <v-btn>
            <router-link to="/animes">
                <v-icon>mdi-information</v-icon><br>
                <span>Animes</span>
            </router-link>
        </v-btn>

  </v-bottom-navigation>
</template>

<script>

export default {
  name: 'AppBottomBar',
  
    data: () => ({ }),

  }
</script>
