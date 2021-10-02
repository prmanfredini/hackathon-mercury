<template>
    <v-container id=home>
        <h2 class="text-h5 text-center mb-3">Lazer em Lockdown</h2>
        
        <v-carousel
            class=inicio-imagem
            cycle
            height="300"
            hide-delimiter-background
            show-arrows-on-hover
            >
                <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
                >
                    <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                    >
                    <v-img class=imagem :src="slide.url"/>
                        
                    
                    </v-row>
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
         {url: "https://cdn.ligadegamers.com/imagenes/54-gta-san-andreas-cke.jpg"},
         {url: "https://s.aficionados.com.br/imagens/we-can_cke.jpg"},
         {url: "https://cdn.ligadosgames.com/imagens/lasf-of-us.jpg"},
         {url: "https://s.aficionados.com.br/imagens/berserk-anime.jpg"},
         {url: "https://cdn.ligadosgames.com/imagens/final-fantasy-vii.jpg"},
         {url: "https://s.aficionados.com.br/imagens/fullmetalbrotherhood_cke.jpg"}
        ],
  }}
};
</script>

<style scoped>

p{
    text-align:justify;
}
</style>>
