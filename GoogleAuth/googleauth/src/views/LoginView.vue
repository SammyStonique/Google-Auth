<template>
  <div class="login grid h-screen place-items-center bg-red-200">
    <div
      class="bg-white m-auto w-1/4 rounded border border-gray-200 shadow-2 shadow-gray-400 shadow-2xl py-4 px-4"
    >
      <h3 class="text-2xl font-semibold text-center mb-6">Login</h3>
      <form action="" @submit.prevent="login">
        <input
          class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
          type="text"
          placeholder="Email"
          v-model="email"
          autofocus
        />
        <br />
        <input
          class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <br />
        <p class="mb-2 text-xs">
          Forgot Password?
          <small class="text-xs underline hover:text-blue-400"
            ><router-link to="">Reset</router-link></small
          >
        </p>
        <p class="mb-4 text-xs">
          Don't have an account?
          <small class="text-xs underline hover:text-blue-400"
            ><router-link to="/register">Sign Up</router-link></small
          >
        </p>
        <button
          type="submit"
          class="rounded w-4/6 bg-green-500 text-white p-2 hover:opacity-75 text-center transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let formData = {
        email: this.email,
        password: this.password,
      };
      await this.axios
        .post("api/v1/token/", formData)
        .then((response) => {
          console.log(response.data);
          const a_token = response.data.access;
          const r_token = response.data.refresh;
          this.$store.commit("setAccessToken", a_token);
          this.$store.commit("setRefreshToken", r_token);
          axios.defaults.headers.common["Authorization"] = "Bearer " + a_token;
          localStorage.setItem("access_token", a_token);
          localStorage.setItem("refresh_token", r_token);
          this.$toast.success("Login Succesful", {
            duration: 5000,
            position: "top",
          });
          this.$router.push("/");
          this.$store.commit("reloadingPage");
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error("Invalid Credentials", {
            duration: 5000,
            position: "top",
          });
        });
    },
  },
  mounted() {
    this.$store.commit("removeAccessToken");
    this.$store.commit("removeRefreshToken");
  },
};
</script>

<style scoped></style>
