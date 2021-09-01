<template>
<div class="container">
  <h6> Ocjena je uspješno izbrisana! yey</h6>
</div>
</template>

<script>
export default {
  props: ['info'],
  name: "Alert",
};
</script>

<style scoped>
.container {
   border: 1px solid black;
   border-radius: 10px;
   background-color: red;
   color: white;
   text-align: center;
   margin-bottom: 1rem;
}
</style>