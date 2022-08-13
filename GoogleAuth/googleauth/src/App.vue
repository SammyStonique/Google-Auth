<template>
  <router-view />
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
    };
  },
  beforeMount() {
    const token = this.$store.state.access_token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  methods: {
    currentUser() {
      this.axios
        .get("api/v1/users/me")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.currentUser();
  },
};
</script>
<style></style>
