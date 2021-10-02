<template>
  <div class="lista-jogos">
    <p>{{ jogos }}</p>
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