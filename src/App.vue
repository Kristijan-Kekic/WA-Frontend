<template>
  <div>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Faksolary</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/pregled">Pregled</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/edit" v-if="auth.authenticated">Uređivanje/dodavanje</a>
            </li>
            <li class="nav-item" v-if="!auth.authenticated">
              <a class="nav-link" href="/login_reg">Login/registracija</a>
            </li>
            <li class="nav-item" v-if="auth.authenticated">
              <b-button id="batn" class="nav-link" @click="logout">Logout</b-button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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

#batn{
  background: none;
  border: 0;
}
</style>
