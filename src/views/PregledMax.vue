<template>
  <div class="fluid-container">
    <Filteri/>
    <br>
    <Grade v-for="ocjena in ocjene" :key="ocjena.id" :info="ocjena"/>
  </div>
</template>

<script>
import Filteri from '@/components/Filteri.vue';
import Grade from '@/components/Grade.vue';
import { Ocjene } from '@/services';

export default {
  name: 'Pregled',
  components: {
  Filteri, Grade
  },
  data: function () {
    return {
      ocjene: []
    }
  },
  mounted() {
    this.getOcjene();
  },
  methods: {
  async getOcjene() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllMax()
  }
},

}
</script>

<style>
</style>