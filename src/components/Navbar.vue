<template>
  <nav>
    <v-toolbar flat class="colors">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Davrbekiy</span>
        <span>Dev</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <login></login>
      <register></register>
    </v-toolbar>
    <v-navigation-drawer
      app
      v-model="drawer"
      temporary
      style="background-color: #9652ff;"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img class="text-lg-center" src="/1.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1 mb-3">The Davrbekiy</p>
        </v-flex>
      </v-layout>
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-icon>
              <v-icon v-text="link.icon" class="white--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="link.text"
                class="white--text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Login from "./Authentication/Login.vue";
import Register from "./Authentication/Register.vue";
export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-folder", text: "Dashboard", route: "/dashboard" },
        { icon: "mdi-account-plus", text: "Team", route: "/team" },
        {
          icon: "mdi-account-group",
          text: "EmployeeTable",
          route: "/employeeTable",
        },
      ],
    };
  },
};
</script>

<style scoped>
.colors {
  background-color: #f5f5f5 !important;
}
</style>
