<template>
  <div class="register grid h-screen place-items-center bg-red-200">
    <div
      class="bg-white m-auto w-1/2 rounded border border-gray-200 shadow-2 shadow-gray-400 shadow-2xl py-4 px-4 pb-6"
    >
      <h3 class="text-2xl font-semibold text-center mb-6">Register</h3>
      <form action="" @submit.prevent="">
        <div class="flex flex-row">
          <div class="basis-1/2">
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="text"
              placeholder="First Name"
            />
            <br />
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="email"
              placeholder="Email"
            />
            <br />
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="password"
              placeholder="Password"
            />
          </div>
          <div class="basis-1/2 ml-4">
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="text"
              placeholder="Last Name"
            />
            <br />
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="text"
              placeholder="Phone Number"
            />
            <br />
            <input
              class="rounded text-lg w-full py-1 m-auto mb-6 border border-b-4 border-gray-300 focus:outline-0"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <p class="mb-4 text-xs">
          Already have an account?
          <small class="text-xs underline hover:text-blue-400"
            ><router-link to="/login">Sign In</router-link></small
          >
        </p>
        <div class="m-auto w-1/2">
          <button
            type="submit"
            class="rounded w-full bg-green-500 text-white p-2 hover:opacity-75 text-center transition ease-in-out delay-150 hover:translate-x-2 hover:scale-110 duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped></style>
