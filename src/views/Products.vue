<template>
  <div class="product">
   <v-container class="my-5">
     <v-layout row justify-center>
       <v-flex lg6 md6 sm12>
         <v-subheader>Products</v-subheader>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe deserunt, aut deleniti corrupti ipsam quo praesentium dolor neque nam, libero provident laborum ea rem accusamus odit numquam sequi quasi.</p>
       </v-flex>
       <v-flex lg6 md6 sm12>
        <v-img src="/images/product.svg"></v-img>
       </v-flex>
     </v-layout>
     <v-divider></v-divider>
             <h3 class="d-inline-block">Products list</h3>
            <button @click="addNew"  class="btn btn-primary float-right">Add Product</button>

     <v-layout row wrap class="mt-5">
       <v-flex>
         <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Price
          </th>
           <th class="text-left">
            Modify
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
           <td>{{product.name}}</td>
           <td>{{product.price}}</td>
           <td>
             <v-btn color="success" text class="mx-2" @click="editProduct(product)">
               <v-icon left>mdi-table-edit</v-icon>
               Edit
             </v-btn>
             <v-btn color="error" text @click="deleteProduct(product)">
               <v-icon left>mdi-delete</v-icon>
               Delete
             </v-btn>
           </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
       </v-flex>
     </v-layout>
     <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Product</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                      <textarea  cols="30" rows="10"></textarea>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h4 class="display-6">Product Details</h4>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product price" v-model="product.price" class="form-control">
                    </div>


                    <div class="form-group">
                      <label for="product_image">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>
                 <div class="form-group d-flex">
                      <div class="p-1" v-for="(image, index) in product.images" :key="index">
                          <div class="img-wrapp">
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button @click="addProduct()" type="button" class="btn btn-primary" v-if="modal == 'new'">Save changes</button>
              <button @click="updateProduct()" type="button" class="btn btn-primary" v-if="modal == 'edit'">Apply changes</button>
           
            </div>
          </div>
        </div>
      </div>

   </v-container>
  </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
// eslint-disable-next-line no-unused-vars
import { fb, db} from '../firebase';

  export default {
    name:"products",
      components: {
    // VueEditor
  },
    data() {
      return {
        products:[],
        product: {
          name:null,
          description:null,
          price:null,
          images:[]
        },
       activeItem:null,
       modal:null
      
      }
    },
      firestore(){
      return {
        products: db.collection('products'),
      }
  },
    methods: {
   deleteImage(img,index){
      let image = fb.storage().refFromURL(img);
      this.product.images.splice(index,1);
      image.delete().then(function() {
        console.log('image deleted');
      // eslint-disable-next-line no-unused-vars
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });
    },
        reset(){
      this.product = {
          name:null,
          // description:null,
          price:null,
          // tags:[],
          images:[]
      }
    },
      uploadImage(g){
        if (g.target.files[0]) {
          let file = g.target.files[0];
  
          var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
        let uploadTask = storageRef.put(file);
        // eslint-disable-next-line no-unused-vars
        uploadTask.on('state_changed', (snapshot) =>{
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
// eslint-disable-next-line no-unused-vars
}, (error) => {
  // Handle unsuccessful uploads
}, () => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    this.product.images.push(downloadURL);
    console.log('File available at', downloadURL);
  });
});
        }
       
      },
      addTag(){
        this.product.tags.push(this.tag);
        this.tag = " ";
      },
       addProduct(){
        this.$firestore.products.add(this.product);

         // eslint-disable-next-line no-undef
         Toast.fire({
            type: 'success',
            title: 'Product created  successfully'
          });
          // eslint-disable-next-line no-undef
          $('#product').modal('hide');
      },
      addNew(){
        this.modal = 'new';
        this.reset();
      // eslint-disable-next-line no-undef
          $('#product').modal('show');
      },
  
         updateProduct(){
        this.$firestore.products.doc(this.product.id).update(this.product);
          // eslint-disable-next-line no-undef
          Toast.fire({
            type: 'success',
            title: 'Updated  successfully'
          });
           // eslint-disable-next-line no-undef
           $('#product').modal('hide');
    },
      editProduct(product){
        this.modal = 'edit';
        this.product = product;
        // eslint-disable-next-line no-undef
          $('#product').modal('show');
         
      },
      deleteProduct(doc){
                            // eslint-disable-next-line no-undef
                            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {

                     this.$firestore.products.doc(doc.id).delete();
                    // eslint-disable-next-line no-undef
                    Toast.fire({
                          icon: 'success',
                          title: 'Deleted  successfully'
                        })
                  }
                })
      },

      },
     
      
    
  
  }
</script>

<style lang="scss" scoped>

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
</style>

