<template>
  <div class="fluid-container">
    <br>
    <div class="gumbovi" align="center">
      <b-button id="dugme" @click="getOcjeneMax">Najbolja ocjena</b-button>
      <b-button id="dugme" @click="getOcjeneMin">Najgora ocjena</b-button>
      <b-button id="dugme" @click="getOcjeneSpec">Specifična ocjena</b-button>
      <b-button id="dugme" @click="getOcjeneAvg">Prosjek ocjene za prof</b-button>
      <b-button id="dugme" @click="getOcjeneDefault">Resetiraj filtere</b-button>
    </div>
    <br>
    <test/>
    <Grade v-for="ocjena in ocjene" :key="ocjena.id" :info="ocjena"/>  
  </div>
</template>

<script>
import Grade from '@/components/Grade.vue';
import test from '@/components/test.vue';
import { Ocjene } from '@/services';

export default {
  name: 'Pregled',
  components: {
    Grade, test
  },
  data: function () {
    return {
      ocjene: []
    }
  },
  mounted() {
    this.getOcjeneDefault();
  },
  methods: {
  async getOcjeneDefault() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllDefault()
  },
  async getOcjeneMax() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllMax()
  },
  async getOcjeneMin() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllMin()
  },
  async getOcjeneSpec() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAllSpec()
  },
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
