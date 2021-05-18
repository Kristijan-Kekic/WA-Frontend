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
import { db } from '@/firebase';

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
    console.log('firebase dohvat...');

    db.collection('ocjene')
        .orderBy('ocj', 'desc')
        .get()
        .then((query) => {
          this.ocjene = [];
          query.forEach((doc) => {
            const data = doc.data();
            this.ocjene.push({
              id: doc.id,
              prof: data.prof,
              ocj: data.ocj,
           })
        });
    })
    console.log();
  }
},

}
</script>

<style>
</style>
