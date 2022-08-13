<template>
  <div class="home">
    <Header />
    <Header2 />
    <p class="text-white select-none">The current idle state is {{ isIdle }}</p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Header2 from "@/components/Header2.vue";
export default {
  components: { Header, Header2 },
  computed: {
    isIdle() {
      if (this.$store.state.idleVue.isIdle) {
        this.$store.commit("reloadingPage");
      }
      return this.$store.state.idleVue.isIdle;
    },
  },
  mounted() {},
};
</script>
