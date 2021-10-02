<template>
  <div class="lista-jogos">
    <v-simple-table>
      <thead>
        <tr>
          
        </tr>
      </thead>
      <tbody>

      </tbody>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'ListaJogos',
  data() {
    return {
      jogos: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
      .then(response => response.json())
      .then(json => {
        this.jogos = json
      })
  }
}
</script>

<style scoped>

</style>