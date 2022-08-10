<template>
  <Header />
  <Header2 />
  <router-view />
</template>
<script>
import Header from "./components/Header.vue";
import Header2 from "./components/Header2.vue";
export default { components: { Header, Header2 } };
</script>
<style lang="scss"></style>
