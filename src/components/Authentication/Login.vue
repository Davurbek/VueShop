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
         <v-icon>mdi-account-key-outline</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
         Login
        </v-card-title>

        <v-card-text>
         <v-form class="px-3"  ref="form">
          <v-text-field v-model="email" label="Email" prepend-icon="mdi-at"  :rules="inputRules"></v-text-field>
          <v-text-field type="password" v-model="password" label="Password" prepend-icon="mdi-lock"  :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn text @click="submit" class="success mx-0 mt-3">
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
import {fb} from '../../firebase';
export default {
  data() {
    return {
      dialog:false,
       email: '',
      password: '',
      menu:false,
        inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
   methods: {
    submit() {

              fb.auth().signInWithEmailAndPassword(this.email, this.password)
              // eslint-disable-next-line no-unused-vars
              .then((user) => {
                this.dialog = false
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
      // if(this.$refs.form.validate()) {
      //   return 
      // }
    }
  },


}
</script>