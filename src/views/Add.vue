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
import { db } from '@/firebase';

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
          const profesor = this.profesor
          const ocjena = this.ocjena

          db.collection('ocjene').add({
             prof: profesor,
             ocj: parseInt(ocjena),
          })
          .then((doc) => {
              console.log('Ocjena unesena!', doc)
              this.profesor = "";
              this.ocjena = "";
          })
          .catch((e) => {
              console.error(e);
          });      
      }
  } 
}
</script>

