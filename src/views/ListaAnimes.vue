<template>
  <v-container >
    <v-row dense>
      <v-col cols="12" v-for="anime in animesLista" :key="anime.id">
        <v-card color="#424242" dark>
          <br />
          <v-img class="img" :src="anime.photo"></v-img>

          <div class="nome">
            <h3> {{ anime.name }} </h3>
          </div>

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
    <br><br>
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
.nome {
  margin: 15px auto;
}

.img {
  margin: 5px;
  margin-top: -17px;
  border-radius: 10px;
}

.descricao {
  text-align: justify;
}
</style>