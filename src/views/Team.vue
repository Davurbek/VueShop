<template>
  <div class="team">
  <v-subheader class="grey-text">Team</v-subheader>
  
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="person in team" :key="person.name">
          <v-card flat class="text-lg-center ma-3 text-xs-center">
            <v-responsive class="ml-3">
             <v-avatar size="100" class="grey lighten-2">
               <img :src="person.avatar">
             </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey" @click="name">
                <v-icon small left>mdi-message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
  export default {
     data() {
    return {
      team: [
        { name: 'Davrbekiy', role: 'Sotuchi', avatar:'/2.png' },
        { name: 'Nilufarxon', role: 'Sotuvchi', avatar:'/3.png'},
        { name: 'Abbosxon', role: 'Kastir', avatar:'/4.png' },
        { name: 'Begzodbek', role: 'Axrana', avatar:'/5.png' },
        { name: 'Yoshi', role: 'Embilema', avatar:'/6.png'}
      ]
    }
  },
  methods: {
    name(person) {
      console.log(person);
    }
  },
  }
</script>

<style lang="scss" scoped>

</style>