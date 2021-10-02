<template>
    <v-container class=homeApp>
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
  
        <p class=recuo>
         <font size=6>A </font>pandemia por COVID-19 trouxe grandes repercussões no cotidiano da população mundial,
            devido à necessidade de quarentena, isolamento e distanciamento social.
            <br>
            Essas medidas mudaram as opções de lazer e tiveram repercussões sobre a saúde mental das pessoas.
        </p>
        <p>
            Para tentar sanar essa dificuldade, umas das melhores alternativas são os entretenimentos
            que podem ser consumidos em casa, pois é  uma maneira de manter nossa saúde mental e diminuir
            a sensação de isolamento.
        </p>
        <p>
            Entre elas estão as plataformas de streaming que possuem diversas opções de filmes e séries.
            Livros, jogos e hoje estamos aqui para trazer as nossas indicações.
        </p>
        <p>
            Disponibilizamos nossas indicações de Jogos e Animes que podem ajudar em momentos como este,
            mas é sempre importante buscar apoio de profissionais para lidar com essas doenças silenciosas.
        </p>
        <v-btn
            color="#FF3D00"
            outlined
            to ="/amarelo"
        >
            Conhecer
        </v-btn>

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
    }
  }
};
</script>

<style scoped>
.recuo { text-indent:4em }

p{
    padding: 15px;
    text-align:justify;
}
</style>>
