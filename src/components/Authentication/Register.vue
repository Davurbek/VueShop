<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="grey lighten-1"
          text
          fab
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
         Register
        </v-card-title>

        <v-card-text>
         <v-form class="px-3"  >
            <v-text-field v-model="name" label="Name" prepend-icon="mdi-account-outline"  :rules="inputRules"></v-text-field>
          <v-text-field v-model="email" label="Email" prepend-icon="mdi-at"  :rules="inputRules"></v-text-field>
          <v-text-field v-model="password" type="password" label="Password" prepend-icon="mdi-lock"  :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn text @click="submit" class="success mx-0 mt-3 ml-5">
           ok
          </v-btn>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {fb, db} from '../../firebase';
export default {
  data() {
    return {
      dialog:false,
       email: '',
      password: '',
      name:'',
      menu:false,
        inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
   methods: {
    submit() {
     
       fb.auth().createUserWithEmailAndPassword(this.email, this.password)
        // eslint-disable-next-line no-unused-vars
        .then((user) => {
                    // eslint-disable-next-line no-undef
                    $('#login').modal('hide')
                 db.collection("profiles1").doc(user.user.uid).set({
                     name: this.name
                  })
                  .then(function() {
                      console.log("Document successfully written!");
                  })
                  .catch(function(error) {
                      console.error("Error writing document: ", error);
                  });
                     this.$router.replace('admin');
                    })
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
      }
   
  },


}
</script>