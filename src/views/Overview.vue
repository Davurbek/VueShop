<template>
  <div class="overview">
    <v-container class="my-5">
    <v-subheader light>Overview</v-subheader>
      <v-row >
        <v-col sm="12" md="6" lg="6">
          <p class="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe deserunt, aut deleniti corrupti ipsam quo praesentium dolor neque nam, libero provident laborum ea rem accusamus odit numquam sequi quasi.</p>
        </v-col>
         <v-col sm="12" md="6" lg="6">
           <v-img src="/images/1.svg"></v-img>
         </v-col>
      </v-row>
      <v-row>
        <v-col sm="12" md="12" lg="12">
            <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="1200"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">
        Sales Last 24h
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name:"Overview",
    data() {
      return {
        value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>