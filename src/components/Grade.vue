<template>
<div class="container">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-3" id="lista">{{info.prof}}</div>
      <div class="col-2" id="lista">{{info.ocj}}</div>
      <div class="col-3" id="lista">{{info.kom}}</div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
  name: "Grade",
};
</script>

<style>
#lista {
   border: 1px solid black;
}
</style>