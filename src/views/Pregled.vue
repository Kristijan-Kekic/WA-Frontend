<template>
  <div class="fluid-container">
    <br>
    <div class="gumbovi" align="center">
      <b-button id="dugme1" variant="no-outline" @click="getOcjeneMax">Najbolja ocjena</b-button>
      <b-button id="dugme1" variant="no-outline" @click="getOcjeneMin">Najgora ocjena</b-button>
      <b-dropdown id="dropdaun" variant="no-outline text-white" text="Specifična ocjena" class="m-2">
        <b-dropdown-item @click="getJedan">1</b-dropdown-item>
        <b-dropdown-item @click="getDva">2</b-dropdown-item>
        <b-dropdown-item @click="getTri">3</b-dropdown-item>
        <b-dropdown-item @click="getCetiri">4</b-dropdown-item>
        <b-dropdown-item @click="getPet">5</b-dropdown-item>
      </b-dropdown>
      <b-button id="dugme1" variant="no-outline" href="/pregled/avggrade">Prosječne ocjene</b-button>
      <b-button id="dugme1" @click="getOcjeneDefault">Resetiraj filtere</b-button>
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
  async getJedan() {
    this.ocjene = []
    this.ocjene = await Ocjene.getOcjeneJedan()
  },
  async getDva() {
    this.ocjene = []
    this.ocjene = await Ocjene.getOcjeneDva()
  },
  async getTri() {
    this.ocjene = []
    this.ocjene = await Ocjene.getOcjeneTri()
  },
  async getCetiri() {
    this.ocjene = []
    this.ocjene = await Ocjene.getOcjeneCetiri()
  },
  async getPet() {
    this.ocjene = []
    this.ocjene = await Ocjene.getOcjenePet()
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
#dugme1 {
  margin: 0px 10px;
  text-align: center;
  background-color: #555599;
  color: #ffffff;
  width: 200px;
  border-radius: 4px;
}

#dropdaun {
  margin: 0px 10px;
  text-align: center;
  background-color: #555599;
  width: 200px;
  border-radius: 4px;
}

</style>
