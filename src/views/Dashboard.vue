<template>
  <div class="dashboard">
  <v-subheader class="grey-text">Dashboard</v-subheader>
   <v-container class="my-5">

         <v-layout row justify-start class="mb-5">
           <v-tooltip top>
             <template v-slot:activator="{ on, attrs }">
             <v-btn small text color="grey" @click="sortBy('title')"  v-bind="attrs"
          v-on="on">
          <v-icon small left>mdi-folder</v-icon>
          <span class="caption text-lowercase">Business positions</span>
        </v-btn>
             </template>
              <span>Sort my project</span>
           </v-tooltip>
        <v-tooltip top>
             <template v-slot:activator="{ on, attrs }">
              <v-btn small text color="grey" @click="sortBy('person')" class="ml-1" v-bind="attrs"
          v-on="on">
          <v-icon small left>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
             </template>
              <span>Sort my person</span>
           </v-tooltip>
       
      </v-layout>
      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Business positions</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Year of birth</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
           <div class="right">
             <v-chip-group>
               <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
             </v-chip-group>
             
           </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>


export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        { title: 'Ish boshqaruvchi', person: 'Davrbek', due: '22nd Octabr 1998', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Hodimlar boshligi', person: 'Azizbek', due: '15th Jan 1996', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Direktor', person: 'Davronbek', due: '20th Dec 1994', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Direktor orinbosari', person: 'Ahmadjon', due: '20th Oct 1995', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
 methods: {
   sortBy(prop) {
     this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
   }
 },
}
</script>
<style>
.project.complete{
  border-left: 4px solid #3CD1C2;
}
.project.ongoing{
  border-left: 4px solid orange
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2 !important;
}
.v-chip.ongoing{
  background: #ffaa2c !important;
}
.v-chip.overdue{
  background: #f83e70 !important;
}

</style>