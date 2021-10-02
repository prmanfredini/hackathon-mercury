<template>
  <div class="lista-jogos">
    <v-container>
      <h2 class="text-h5 text-center mb-3 mt-5">Lista de Jogos</h2>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            <tr v-for="jogo in jogos" :key="jogo.id">
              <div class="title">
                <div>
                  <img :src="jogo.photo" :alt="jogo.photo" />
                </div>

                <tr>
                  <span class="pl-2">{{ jogo.name }}</span>
                </tr>

                <td class="text-right">{{ jogo.genre }}</td>
                <td class="text-right">{{ jogo.platform }}</td>
                <td class="text-right">{{ jogo.year }}</td>
                <td class="text-right">
                  {{ jogo.platform }}
                </td>
              </div>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
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
</style>