<template>
  <div class="container">
  <br>
  <h2 id="pregled-naslov" align="center">Dodavanje/uređivanje ocjena</h2>
  <br>
  <div class="row" align="center">
  <div class="col-3"></div>
  <div class="col-6">
    <b-button id="dugme" variant="no-outline" href="edit/add">Dodaj ocjenu</b-button>
    <b-button id="dugme" variant="no-outline" href="edit/change">Uredi ocjenu</b-button>
  </div>
  <div class="col-3"></div>
  </div>  
  </div>
</template>

<script>

export default {
  name: 'Edit',
  components: {
  }
}
</script>

<style scoped>
#dugme {
  margin:20px;
  text-align: center;
  width: 200px;
  border-radius: 4px;
  background-color: #555599;
  color: #ffffff;
}
</style>

