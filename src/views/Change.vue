<template>
<div>
  <br>
  <h2 align="center">Vaše unesene ocjene:</h2><br>
  <div class="row">
    <div class="col-2"></div>
        <div class="col-2" id="lista">Profesor</div>
        <div class="col-2" id="lista">Ocjena</div>
        <div class="col-2" id="lista">Komentar</div>
    <div class="col-2"></div>
    <div v-for="ocjena in ocjene" :key="ocjena.id" :info="ocjena">
      <div class="row tablica">
        <div class="col-2"></div>
        <div class="col-2 tablicatekst" id="lista">{{ocjena.prof}}</div>
        <div class="col-2 tablicatekst" id="lista">{{ocjena.ocj}}</div>
        <div class="col-2 tablicatekst" id="lista">{{ocjena.kom}}</div>
        <div class="col-2">
        <b-button id="dugme" variant="no-outline" @click="editEntry(ocjena)">Uredi ocjenu</b-button>
        <b-button id="dugme" variant="no-outline" @click="deleteEntry(ocjena.id)">Izbrisi ocjenu</b-button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
 </div>
</div>
</template>

<script>
import { Ocjene } from '@/services/index.js';
import {Auth} from '@/services'

export default {
  name: 'Add',
  components: {
  },
  data() {
    return {
        msg: "",
        ocjene: [],
        profesor: "",
        ocjena: "",
        komentar: "",
    };
  },
  mounted() {
    this.getOcjeneEdit();
  },

  methods: {
      async getOcjeneEdit() {
        console.log(Auth.getUser())
        this.ocjene = []
        this.ocjene = await Ocjene.getAllEdit()
       },
      async editEntry(ocjena) {
        this.$router.push(`/edit/change/${ocjena.id}`)
      },
      async deleteEntry(id) {
        await Ocjene.deleteGrade(id)
        this.ocjene = this.ocjene.filter(ocjena => ocjena.id !== id) // this.ocjene za promjenu originalnog arraya, filter vraca novi array
        this.msg = "uspjesno"
        setTimeout(() => { //timeout 2sec, stavlja msg na ""
          this.msg = ""
        }, 2000)
      }  
  } 
}
</script>

<style scoped>
#dugme {
    text-align: center;
    margin: 1px 0;
    width: 200px;
    border-radius: 4px;
    background-color: #555599;
    color: #ffffff;
}

.tablica{
  text-align: center;
}

.tablicatekst{
  text-align: center;
  padding: 25px 0;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>