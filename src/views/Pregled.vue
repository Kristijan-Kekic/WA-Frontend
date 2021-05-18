<template>
  <div class="fluid-container">
    <Filteri/>
    <br>
    <Ocjena/>

  </div>
</template>

<script>
import Filteri from '@/components/Filteri.vue';
import Ocjena from '@/components/Ocjena.vue';

export default {
  name: 'Pregled',
  components: {
  Filteri, Ocjena
  }
}
</script>

<style>
</style>
