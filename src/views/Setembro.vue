<template>
  <v-container >
    <v-row dense>
      <v-col cols="12" v-for="instituicao in instituicaoLista" :key="instituicao.id">
        <v-card color="#424242" dark>
          <br />
          <v-img class="img" :src="instituicao.imagem"></v-img>

          <div class="nome">
            <h3> {{ instituicao.nome }} </h3>
          </div>

          <div class="ficha">
              <v-btn color="#FF3D00" outlined :href="instituicao.link" target="_blank">SITE</v-btn>
          </div>

        </v-card>
      </v-col>
    </v-row>
    <br><br>
  </v-container>
</template>

<script>
export default {
  name: "InstituicaoLista",
  data() {
    return {
      instituicaoLista: [],
    };
  },
  created() {
    //Estrutura utilizada para trazer dados da internet (consumir API)
    fetch("https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json")
      .then((response) => response.json())
      .then((json) => {
        this.instituicaoLista = json;

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
.ficha {
    padding: 8px;
}
</style>
