<template>
  <v-container class="my-5" fluid>
   <v-layout row wrap class="mb-5">
      <v-subheader class="grey-text text-center">Ishchilarning Ro'yhati</v-subheader>
      <v-spacer></v-spacer>
   <employee-modal></employee-modal> 
   </v-layout>

        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            FISH
          </th>
          <th class="text-left">
            Lavozimi
          </th>
          <th class="text-left">
            Ish vaqti
          </th>
          <th class="text-left">
            Oyligi
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.FullName }}</td>
          <td>{{ item.position }}</td>
          <td>{{ item.workinghours }}</td>
          <td>{{ item.salary }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
   <v-layout row wrap class="mt-5">
     <v-spacer></v-spacer>
     <Back></Back>
   </v-layout>
  </v-container>
</template>

<script>
import EmployeeModal from './employeeModal.vue';
import Back from '@/components/Back/Back.vue';
  export default {
    components: {
      EmployeeModal,
      Back
    },
    data () {
      return {
        desserts: [
          {
            id:1,
            FullName: 'Davrbek Toyliboyev',
            position:'Sotuvchi',
            workinghours:'8:00-14:00',
            salary:1200000
          },
          {
             id:2,
            FullName: 'Azizbek Ismoilov',
            position:'Sotuvchi',
            workinghours:'14:00-23:00',
            salary:1200000
          },
          {
            id:3,
            FullName: 'Karimova Nilufarxon',
            position:'Sotuvchi',
            workinghours:'8:00-14:00',
            salary:1200000
          },
          {
            id:4,
            FullName: 'Olimova Nodira',
            position:'Sotuvchi',
            workinghours:'14:00-23:00',
            salary:1200000
          }, 
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>