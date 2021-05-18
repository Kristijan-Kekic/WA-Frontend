<template>
  <b-container class="container">
  <br>
  <h1 id="pregled-naslov">Pregled ocjena </h1>
  <b-row>
  <div class="col-2"></div>
  <div class="col-8">
  <br>
  <b-button pill id="dugme" href="/pregled">Pregled danih ocjena</b-button>
  <b-button pill id="dugme" href="/pregledmax">Najbolja ocjena</b-button>
  <b-button pill id="dugme" href="/pregledmin">Najgora ocjena</b-button>
  <b-button pill id="dugme">Specifična ocjena</b-button>
  <b-button pill id="dugme">Broj danih ocjena</b-button>
  </div>
  <div class="col-2"></div>
  </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Filteri",
   methods: {
    greet: function(event) {
      alert(event.target.tagName);
    }
  }
};

</script>

<style>
#pregled-naslov {
  text-align: center;
}
#dugme {
  text-align: center;
  color: white;
  background-color: black;
}

</style>