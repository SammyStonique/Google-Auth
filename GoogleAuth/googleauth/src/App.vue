<template>
  <Header />
  <Header2 />
  <!-- <div class="test-div bg-red-500 w-1/2 mt-10 h-20">
    <button></button>
    <div class="test2-div bg-blue-500 w-1/2 h-3">Say Something</div>
    <div class="test3-div bg-green-500 w-1/2 h-3">Whaaaat</div>
  </div> -->
  <router-view />
</template>
<script>
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
export default { components: { Header, Header2 } };
</script>
<style>
/* .test3-div {

  height: 0px;
  transition: height 1s;
}
.test-div:hover .test3-div {
  display: block;
  height: 50px;
  transition: height 1s;
} */
</style>
