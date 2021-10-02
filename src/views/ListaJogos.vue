<template>
    <v-container>
      <v-row dense>
        <v-col cols="12" v-for="jogo in jogos" :key="jogo.id">
           <v-card color="#424242" dark >
            <br> 
            <v-img class=img
            :src="jogo.photo"></v-img>

             <v-card-title class="text-h5">
              {{ jogo.name }}
            </v-card-title>

            <div class="ficha">
              <div>Genero: {{ jogo.genre }}</div>
              <div>Plataforma: 
                <span v-for="(plataforma, index) in jogo.platform" :key="index">{{ plataforma + (index + 1 != jogo.platform.length ? ", " : "")}}</span>
            
              </div>
              <div>Ano: {{ jogo.year }}</div>
            </div>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
     

<script>
export default {
  name: "ListaJogos",
  data() {
    return {
      jogos: [],
    };
  },
  created() {
    fetch("https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json")
      .then((response) => response.json())
      .then((json) => {
        this.jogos = json;
      });
  },
};
</script>

<style scoped>
   .img{
     margin: 5px;
     margin-top: -17px;
     border-radius: 10px;
   }

    .descricao {
        text-align: justify;
    }
</style>