<template>
  <div>
    <div id="app">
  </div>
  <div class="navigacija">
  <b-navbar class="navbar-margina" toggleable="lg">
    <b-navbar-brand>Faksolary</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/pregled">Pregled</b-nav-item>
        <b-nav-item href="/edit" v-if="auth.authenticated">Uređivanje/dodavanje</b-nav-item>
        <b-nav-item href="/login_reg" v-if="!auth.authenticated">Login/registracija</b-nav-item>
        <b-nav-item href="#" @click="logout" v-if="auth.authenticated">Odjava</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    <router-view/>
  </div>
</template>

<script>

import {Auth} from '@/services'

export default{
  data() {
    return{
      auth: Auth.state,
    };
  },
  name: "App.vue",
    components: {
    },
    methods: {
      logout(){
        Auth.logout();
        this.$router.go();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  overflow-x: hidden;
}

.navigacija{
  background-color: #eeeeee;
}
.navbar-margina{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
