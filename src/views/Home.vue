<template>
  <div class="fluid-container">
  <div class="row">
    <div class="col-3" id="a">
      1 of 3
    </div>
    <div class="col-6" id="b">
      <div class="d-grid gap-5">
      <br>
      <button class="btn btn-primary" type="button">Pregled ocjena</button>
      <br>
      <button class="btn btn-primary" type="button">Uređivanje ocjena</button>
      <br>
      </div>
    </div>
    <div class="col-3" id="c">
      3 of 3
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
#a {
  background-color: yellow;
}
#b {
  background-color: cyan;
}
#c {
  background-color: yellow;
}
</style>