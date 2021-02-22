<template>
  <div class="add-to-cart">
   
    <button class="btn btn-primary" @click="addToCard"> Add to Cart </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },
  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }
      }
  },
  methods: {
  addToCard(){
     // eslint-disable-next-line no-undef
     $('#miniCart').modal('show');
     this.$store.commit('addToCard', this.item)
  }
  },
  
}
</script>

<style scoped lang="scss">
</style>