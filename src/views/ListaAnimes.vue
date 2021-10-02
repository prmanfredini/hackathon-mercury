<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" v-for="anime in animesLista" :key="anime.id">
        <v-card color="#385F73" dark>
          <v-img :src="anime.photo"></v-img>

          <v-card-title class="text-h5">
            {{ anime.name }}
          </v-card-title>

          <div class="ficha">
            <div>Genero: {{ anime.genre }}</div>
            <div>{{ anime.status }}</div>
          </div>

          <v-card-subtitle class="descricao">{{
            anime.description
          }}</v-card-subtitle>
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

<style scoped>
    .ficha {
        display: flex;
        justify-content: space-between;
    }

    .descricao {
        text-align: justify;
    }
</style>