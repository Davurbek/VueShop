<template>
<div class="home"> 
  <Navbar></Navbar>
  <v-container class="my-5" fluid>
  <v-carousel 
    cycle
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
<v-row>
  <mini-cart></mini-cart>
  <kitchen></kitchen>
</v-row>
</v-container>
<Footer></Footer>
</div>


</template>

<script>
import MiniCart from '../Product/MiniCart';
import Kitchen from '../ShoppingCart/Kitchen';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/views/Footer.vue';
export default {
name:'Home',
components: {
  MiniCart,
  Kitchen,
  Navbar,
  Footer
},
   data() {
     return {
         items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
     }
   }, 
  }
</script>

<style lang="scss" scoped>

</style>