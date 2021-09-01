<template>
  <div class="fluid-container">
    <br>
    <div class="gumbovi" align="center">
      <b-button id="dugme" href="/pregled">Povratak na pregled</b-button>
    </div>
    <br>
    <div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col" id="lista">Profesor</div>
      <div class="col" id="lista">Srednja ocjena</div>
      <div class="col-2"></div>
    </div>
  </div>
    <AvgGrade v-for="ocjena in ocjene" :key="ocjena.id" :info="ocjena"/>  
  </div>
</template>

<script>
import AvgGrade from '@/components/AvgGrade.vue';
import { Ocjene } from '@/services';

export default {
  name: 'Pregled',
  components: {
    AvgGrade
  },
  data: function () {
    return {
      ocjene: []
    }
  },
  mounted() {
    this.getOcjeneAvg();
  },
  methods: {
  async getOcjeneAvg() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllAvg()
    console.log(this.ocjene)
  },
},

}
</script>

<style>
#dugme {
  text-align: center;
  color: #444444;
  background: none;
  width: 200px;
  border-radius: 4px;
}
</style>
