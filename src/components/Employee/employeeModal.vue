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
          v-bind="attrs"
          v-on="on"
        >
         ADD
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
         Yangi ishchi qo'shish
        </v-card-title>

        <v-card-text>
         <v-form class="px-3" >
            <v-text-field v-model="FullName" label="FullName" :rules="inputRules"></v-text-field>
          <v-text-field v-model="position" label="Position"  :rules="inputRules"></v-text-field>
          <v-text-field v-model="workinghours" label="WorkingHours" :rules="inputRules"></v-text-field>
           <v-text-field v-model="salary" label="Salary" :rules="inputRules"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn text @click="submit" class="success mx-0 mt-3 ml-5">
           Add
          </v-btn>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog:false,
            FullName: '',
            position:'',
            workinghours:'',
            salary:'',
      menu:false,
        inputRules: [
        v => !!v || 'This field is required',
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
   methods: {
    submit() {
     
      }
    }



}
</script>