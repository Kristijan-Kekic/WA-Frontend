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
import { Ocjene } from '@/services'; 

export default {
  name: 'Add',
  data: function() {
    return {
        profesor: "",
        ocjena: "",
    };
  },

  methods: {
      postNewGrade() {
          let noviUnos = {
            noviProfesor: this.profesor,
            novaOcjena: parseInt(this.ocjena)
          }
          Ocjene.create(noviUnos)
          .catch((e) => {
              console.error(e);
          });      
      }
  } 
}
</script>

