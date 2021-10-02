<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Animes</h2>

    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="anime in animesLista" :key="anime.id">
            <div class="title">
              <div class="folder">
                <img :src="anime.photo" :alt="anime.name" />
              </div>

              <div>
                <div class="nome">
                  <span class="text-center">{{ anime.name }}</span>
                </div>

                <div class="genero">{{ anime.genre }}</div>
                <div class="status">{{ anime.status }}</div>

                <div class="descricao">
                  {{ anime.description }}
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
.title {
  text-align: center;
  display: flex;
  max-width: 90%;
}

.folder {
  margin: 20px auto;
}

.folder img {
  width: 90vw;
}

.descricao {
  text-align: justify;
}
</style>