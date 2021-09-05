<template>
  <div class="fluid-container">
  <div class="row">
    <div class="col-3">
    </div>
    <div class="col-6">
      <br>
      <div align="center">
          <b-button id="dugme" href="/pregled">Pregled ocjena</b-button>
      <div id="tekst">Ovdje možete pregledati sve ocjene</div>
      <div v-if="auth.authenticated" align="center">
          <b-button id="dugme" href="/edit">Uređivanje/dodavanje ocjena</b-button>
      </div>
      <div id="tekst" v-if="auth.authenticated">Ovdje možete urediti ili dodati novu ocjenu</div>
      </div>
    </div>
    <div class="col-3">
    </div>
  </div>
  </div>
</template>

<script>
import {Auth} from '@/services'

export default {
  data() {
    return{
      auth: Auth.state,
    };
  },
  name: 'Home',
}
</script>

<style scoped>
#tekst {
  text-align: center;
}
#dugme {
  margin: 20px;
  text-align: center;
  width: 400px;
  border-radius: 4px;
  background-color: #555599;
  color: #ffffff;
}
</style>