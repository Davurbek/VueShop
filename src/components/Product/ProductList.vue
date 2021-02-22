<template>
  <div class="products">
     <div class="container">
          <h1 class="text-center p-5">Our Products List</h1>
          <div class="row">
              
              <div class="col-md-4" v-for="product in products" :key="product.id">
                  <div class="card product-item" v-for="(image, index) in product.images" :key="index">

                        
                                <img :src="image" class="card-img-top" alt="..." width="200px">
                
                        <div class="card-body">
                          <div class="d-flex justify-content-between">
                            <h5 class="card-title">{{ product.name }}</h5>
                            <h5 class="card-priceS">{{ product.price | currency}}</h5>

                          </div>
                           <add-to-card
                              :image="getImage(product.images)"
                              :p-id="product.id"
                                :price="product.price"
                                :name="product.name"
                           ></add-to-card>
                        </div>
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import AddToCard from './AddToCard';
import {db} from '../../firebase';
export default {
  name: "ProductList",
  components: {
    AddToCard,
  },
   data() {
     return {
       products: [],
     }
   },
     methods:{
    getImage(images){
      return images[0];
    },
   
     },
     firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>


<style scoped>

</style>