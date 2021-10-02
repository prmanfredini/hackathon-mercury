<template>
 <v-container>
      <v-row dense>
        <v-col cols="12"
        v-for="anime in animesLista" :key="anime.id">

          <v-card
            color="#385F73"
            dark
          >
          <v-img :src="anime.photo"></v-img>
            <v-card-title class="text-h5">
              {{ anime.name }}
            </v-card-title>

            
              <div class="genero"> Genero: {{ anime.genre }} </div>
              
              <p>adjective</p>
              <div class="statust">
                {{ anime.status }}
              </div>
            
            <v-card-subtitle>{{ anime.description }}</v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "AnimesLista",
  data() {
    return {
      animesLista: [],
    };
  },
  created() {
    //Estrutura utilizada para trazer dados da internet (consumir API)
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json")
      .then((response) => response.json())
      .then((json) => {
        this.animesLista = json;
        //console.log(this.animesLista);
      });
  },
};
</script>
