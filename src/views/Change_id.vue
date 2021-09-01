<template>
 <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
    <form @submit.prevent="modifyGrade" class="form-inline mb-5">
    <div class="form-group">
      <br>
     <label for="profesor">Profesor</label>
      <br>
    <input
    v-model="profesor"
    type="text"
    value=ocjena.profesor
    class="form-control ml-2"
    id="profesor"
    />
    </div>
    <div class="form-group">
    <label for="ocjena">Ocjena</label>
    <br>
    <input v-model="ocjena"
    type="number"
    value=ocjena.ocjena
    class="form-control ml-2"
    id="ocjena"
    min="1" max="5"
    />
    </div>
    <div class="form-group">
    <label for="komentar">Komentar</label>
    <br>
    <input v-model="komentar"
    type="text"
    value=ocjena.komentar
    class="form-control ml-2"
    id="komentar"
    />
    </div>
    <br>
    <button type="submit" class="btn btn-primary ml-2">Unesi ocjenu</button>
    </form>
    </div>
    <div class="col-4">
    </div>
 </div>
</template>

<script>
import { Ocjene } from '@/services/index.js'; 

export default {
  name: 'Add',
  data() {
    return {
        id: this.$route.params.id, //uzima id iz rute
        profesor: "",
        ocjena: "",
        komentar: ""
    };
  },

   mounted() {
    this.getOneGrade();
  },

  methods: {
      async getOneGrade() { 
      let ocjena = await Ocjene.getOneGrade(this.id)
      this.profesor = ocjena.profesor,
      this.ocjena = ocjena.ocjena,
      this.komentar = ocjena.komentar
      },
      async modifyGrade() {
      await Ocjene.modifyGrade(this.id, this.profesor, this.ocjena, this.komentar)
      this.$router.push("/edit/change")
      }
  } 
}
</script>

