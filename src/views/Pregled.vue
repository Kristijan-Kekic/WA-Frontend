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
import { Ocjene } from '@/services';

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
  async getOcjene() {
    this.ocjene = []
    this.ocjene = await Ocjene.getAll()
  }


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
},

}
</script>

<style>
</style>
