<template>
  <div class="fluid-container">
  <div class="row">
    <div class="col-3">
    </div>
    <div class="col-6">
      <br>
      <div class="d-grid gap-5">
      <div class="col-5 mx-auto">
          <router-link class="rl" to="/pregled">Pregled ocjena</router-link>
      </div>
      <div id="tekst1">Ovdje možete pregledati sve ocjene</div>
      <div class="col-5 mx-auto">
          <router-link class="rl" to="/edit">Uređivanje/dodavanje ocjena</router-link>
      </div>
      <div id="tekst2">Ovdje možete urediti ili dodati novu ocjenu</div>
      </div>
    </div>
    <div class="col-3">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.col-5{
  border-radius: 10px;
  background:white;
  width:50%;
  height:50%;
  padding:4.5%;
  box-shadow: 4px 4px 5px rgba(145, 144, 144, 0.747);
  border: 1px solid lightgrey;
}

.rl{
  color:black;
  text-decoration:none;
}

#tekst1 {
  text-align: center;
}

#tekst2 {
  text-align: center;
}
</style>