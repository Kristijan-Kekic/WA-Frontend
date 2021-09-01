<template>
<div>
  <p align="center">Vaše ocjene</p>
  <Alert v-if="this.msg.length > 0"/> <!-- v-if gleda dal je msg veci od 0 nakon sto onclick msg postane "uspjesno" se poziva alert -->
  <div class="row">
    <div v-for="ocjena in ocjene" :key="ocjena.id" :info="ocjena">
      <div class="row">
      <div class="col-2"></div>
      <div class="col-2" id="lista">{{ocjena.prof}}</div>
      <div class="col-2" id="lista">{{ocjena.ocj}}</div>
      <div class="col-2" id="lista">{{ocjena.kom}}</div>
      <div class="col-2">
      <b-button id="dugme" @click="editEntry(ocjena)">Uredi ocjenu</b-button>
      <b-button id="dugme" @click="deleteEntry(ocjena.id)">Izbrisi ocjenu</b-button>
      </div>
      <div class="col-2"></div>
    </div>
    </div>
 </div>
</div>
</template>

<script>
import { Ocjene } from '@/services/index.js';
import Alert from '@/components/Alert.vue'

export default {
  name: 'Add',
  components: {
    Alert
  },
  data() {
    return {
        msg: "",
        ocjene: [],
        profesor: "",
        ocjena: "",
        komentar: ""
    };
  },
  mounted() {
    this.getOcjeneDefault();
  },

  methods: {
      async getOcjeneDefault() {
        this.ocjene = []
        this.ocjene = await Ocjene.getAllDefault()
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

