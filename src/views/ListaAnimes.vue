<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Animes</h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <!--<th colspan="2" class="text-left">Clube</th>
            <th class="text-right">Pontos</th>-->
          </tr>
        </thead>
        <tbody>
          <tr v-for="anime in animesLista" :key="anime.id">
            <div class="title">
              <div>
              <img :src="anime.photo" :alt="anime.name" />
              </div>

              <tr>
                <span class="pl-2">{{ anime.name }}</span>
              </tr>

              <td class="text-right">{{ anime.genre }}</td>
              <td class="text-right">{{ anime.status }}</td>
              <tr class="text-right">{{ anime.description }}</tr>
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
