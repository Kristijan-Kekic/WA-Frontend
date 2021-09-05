<template>
 <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
    <form @submit.prevent="postNewGrade" class="form-inline mb-5">
    <div class="form-group">
      <br>
     <label for="profesor">Profesor</label>
      <br>
    <input
    v-model="profesor"
    type="text"
    class="form-control ml-2"
    id="profesor"
    />
    </div>
    <div class="form-group">
    <label for="ocjena">Ocjena</label>
    <br>
    <input v-model="ocjena"
    type="number"
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
    class="form-control ml-2"
    id="komentar"
    />
    </div>
    <br>
    <button type="submit" class="btnSubmit">Unesi ocjenu</button>
    </form>
    </div>
    <div class="col-4">
    </div>
 </div>
</template>

<script>
import { Ocjene } from '@/services/index.js'; 
import { Auth } from '@/services'
export default {
  name: 'Add',
  data() {
    return {
        profesor: "",
        ocjena: "",
        komentar: "",
        korisnik: Auth.getUser().username
    };
  },

  methods: {
      async postNewGrade() {
          let noviUnos = {
            profesor: this.profesor,
            ocjena: parseInt(this.ocjena),
            komentar: this.komentar,
            korisnik: this.korisnik
          }
      let newOne = await Ocjene.addNewInput(noviUnos)
      console.log("dodano", newOne.data)
      this.profesor = "",
      this.ocjena = "",
      this.komentar = ""
      }
  } 
}
</script>

<style scoped>
.btnSubmit{
  width: 50%;
  border-radius: 4px;
  padding: 1.5%;
  border: none;
  cursor: pointer;
  background-color: #555599;
  color: #ffffff;
}
</style>