<template>
  <div class="fluid-container">
    <Filteri/>
    <br>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>1 of 3</b-col>
      <b-col>2 of 3</b-col>
      <b-col>3 of 3</b-col>
    </b-row>
  </b-container>

  </div>
</template>

<script>
import Filteri from '@/components/Filteri.vue';
export default {
  name: 'Pregled',
  components: {
  Filteri
  }
}
</script>

<style>
</style>
