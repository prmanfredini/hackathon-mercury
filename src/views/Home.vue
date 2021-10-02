<template>
    <v-container id=home>
        <h2 class="text-h5 text-center mb-3">Lazer em Lockdown</h2>
        
        <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                <v-sheet
                    height="100%"
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <img :src="slide.url"/>
                        
                    
                    </v-row>
                </v-sheet>
                </v-carousel-item>
            </v-carousel>
  
        <p>A pandemia por COVID-19 trouxe grandes repercussões no cotidiano da população mundial, devido à necessidade de quarentena, isolamento e distanciamento social. Essas medidas mudaram as opções de lazer e tiveram repercussões sobre a saúde mental das pessoas.
E para tentar sanar essa dificuldade, umas das melhores alternativas são os entretenimentos que podem ser consumidos em casa, pois é  uma maneira de manter nossa saúde mental e diminuir a sensação de isolamento.
Entre elas estão as plataformas de streaming que possuem diversas opções de filmes e séries.
Livros, jogos e hoje estamos aqui para trazer as nossas indicações.
Disponibilizamos nossas indicações de Jogos e Animes !!
</p>
<br>
<br>
    </v-container>
</template>

<script>
export default {
  name: "Home",
  data () {
  return {
  slides: [
         {url: "https://gamehall.com.br/wp-content/uploads/2020/08/65008-gettyimages-843648918.jpg"},
         {url: "https://i0.wp.com/www.toppapeldeparede.com.br/wp-content/uploads/2021/02/anime-4k.png?resize=576%2C1024&ssl=1"}
        ],
  }}
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 5px;
}
p{
    text-align:justify;
}
</style>>
