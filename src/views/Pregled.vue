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
  getOcjene() {
    this.ocjene = []
    fetch("http://localhost:3000/ocjene")
    .then(r => {
      return r.json()
    })
    .then (data => {
      console.log("backend", data)

      let data2 = data.map(element => {
        return {
          id: element.id,
          prof: element.profesor,
          ocj: element.ocjena,
          kom: element.komentar
        }
      })
      this.ocjene = data2
    })

    //db.collection('ocjene')
    //    .get()
    //    .then((query) => {
    //      this.ocjene = [];
    //      query.forEach((doc) => {
    //        const data = doc.data();
    //        this.ocjene.push({
    //          id: doc.id,
    //          prof: data.prof,
    //          ocj: data.ocj,
    //       })
    //    });
    //})
  }
},

}
</script>

<style>
</style>
