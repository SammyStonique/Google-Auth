<template>
  <div>
    <nav
      class="h-12 border border-b-1 border-gray-300 flex pt-1 pb-1 border-x-0 border-t-0 dark:bg-slate-800 dark:border-gray-100"
    >
      <div class="mx-2 flex-initial select-none">
        <router-link to="/" class="ml-5 mr-10">
          <small class="text-3xl text-blue-500 font-normal">G</small
          ><small class="text-2xl text-red-400 font-normal">o</small
          ><small class="text-2xl text-yellow-400 font-normal">o</small
          ><small class="text-2xl text-blue-500 font-normal">g</small
          ><small class="text-2xl text-green-500 font-normal">l</small>
          <small class="text-2xl text-red-400 font-normal">e </small>
          <small class="text-2xl text-gray-500 dark:text-white dark:opacity-75"
            >Developers</small
          >
        </router-link>
      </div>
      <router-link
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
        >Events</router-link
      >
      <div class="dropdown">
        <router-link
          to=""
          class="display-content mr-3 align-baseline pb-5 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
          >Products
          <!-- <i class="fa fa-caret-up ml-2" aria-hidden="true"></i> -->
          <i class="fa fa-caret-down ml-2" aria-hidden="true"></i>
        </router-link>
        <div
          class="dropdown-content absolute flex z-50 w-1/2 bg-white mt-5 border p-4 text-black text-sm border-gray-200 shadow-xl rounded dark:bg-slate-800 dark:text-white"
        >
          <div class="basis-1/3">
            <p class="pt-1 pb-4 font-semibold">Develop</p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Android</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Chrome OS</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Firebase</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500"><router-link to="">Cloud</router-link></p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Assistant</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Workspace</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Maps Platform</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Tensor Flow</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500"><router-link to="">Web</router-link></p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">YouTube</router-link>
            </p>
          </div>
          <div class="basis-1/3">
            <p class="pt-1 pb-4 font-semibold">Grow</p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Firebase</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Ads</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Analytics</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Play</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Search</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Web Push and Notifications API</router-link>
            </p>
          </div>
          <div class="basis-1/3">
            <p class="pt-1 pb-4 font-semibold">Earn</p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">AdMob</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Ads API</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Play</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Google Play Billing</router-link>
            </p>
            <p class="pb-4 hover:text-gray-500">
              <router-link to="">Interactive Media Ads</router-link>
            </p>
          </div>
        </div>
      </div>
      <router-link
        to="/learn"
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
        >Learn</router-link
      >
      <router-link
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
        >Developer Profile</router-link
      >
      <router-link
        to="/blog"
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
        >Blog</router-link
      >
      <div class="dropdown-two">
        <router-link
          to=""
          class="ml-4 mr-10 pb-5 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black dark:text-white dark:md:hover:border-white/75 dark:md:hover:text-white/50 dark:md:focus:text-white dark:md:focus:border-white"
          >More<i class="fa fa-caret-down ml-2" aria-hidden="true"></i
        ></router-link>
        <div
          class="display-two absolute bg-white border border-gray-200 mt-5 pt-6 pl-3 pr-3 h-20 shadow-2 shadow-xl rounded dark:bg-slate-800 dark:text-white"
        >
          <p class="text-black dark:text-white dark:md:hover:text-white/50">
            <router-link to="" class="hover:text-gray-500"
              >Developer Communities</router-link
            >
          </p>
        </div>
      </div>
      <i class="fa fa-search ml-20 mt-3" aria-hidden="true"></i>
      <input
        class="w-40 bg-gray-200 rouded mr-5 text-sm focus:outline-none dark:bg-white/75"
        type="text"
        placeholder="Search"
      />
      <button
        class="rounded border border-gray-400 py-1 px-3 text-sm text-gray-500 hover:bg-gray-200 dark:text-white dark:md:hover:text-white/50 dark:md:hover:bg-slate-500"
      >
        English
      </button>
      <div class="options-dropdown relative">
        <button
          class="relative z-10 ml-5 rounded-full h-11 border w-11 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black dark:text-white dark:md:hover:bg-slate-500 dark:md:hover:text-white/50"
          @click="showDropdown"
        >
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <button
          class="fixed inset-0 bg-gray-100 opacity-25 cursor-default"
          v-if="showOptions"
          @click="showOptions = !showOptions"
        ></button>
        <div
          class="options-container absolute right-0 pt-4 pb-2 rounded border border-gray-200 bg-white shadow shadow-xl"
          v-if="showOptions"
        >
          <p class="mb-4 pl-3 uppercase text-xs pr-10">Google Developer Profile</p>
          <button
            class="w-full text-left pl-3 pb-4 pt-4 w-full text-sm hover:bg-gray-200"
          >
            <router-link to="">Dashboard</router-link>
          </button>
          <button class="w-full text-left pl-3 pb-4 pt-4 text-sm hover:bg-gray-200">
            <router-link to="" class="">Saved Pages</router-link>
          </button>
          <button class="w-full text-left pl-3 pb-4 pt-4 text-sm hover:bg-gray-200">
            <router-link to="">Profile</router-link>
          </button>
        </div>
      </div>
      <div class="signout-dropdown">
        <div
          class="rounded-full h-11 pb-5 w-11 ml-5 overflow-hidden border-2 border-white hover:border-2 hover:border-blue-400 hover:opacity-50 hover:shadow-2 hover:shadow-2xl"
        >
          <button>
            <img
              src="./../assets/profile.jpg"
              alt="Profile Pic"
              class="w-full h-full object-cover"
            />
          </button>
        </div>
        <div
          class="absolute signout-content border border-gray-200 pt-4 pb-4 px-4 right-5 bg-white shadow-2 shadow-xl"
        >
          <p class="hover:text-gray-400">
            <router-link to="/login">Sign Out</router-link>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOptions: false,
    };
  },
  methods: {
    showDropdown() {
      this.showOptions = !this.showOptions;
    },
  },
};
</script>

<style scoped>
.dropdown-content {
  /* height: 0px; */
  display: none;
  transition: height 2s;
}
/* bg-white mt-5 border p-4 text-black text-sm border-gray-200 shadow-xl rounded */
.dropdown:hover .dropdown-content {
  display: flex;
  /* height: 420px;
  background-color: white;
  margin-top: 5px;
  border: 1px solid gray;
  transition: height 2s; */
}
.display-content:focus .dropdown-content {
  display: flex;
}
.display-content {
  margin-top: 4px !important;
}
.display-two {
  display: none;
}
.dropdown-two:hover .display-two {
  display: flex;
}
.signout-content {
  display: none;
}
.signout-dropdown:hover .signout-content {
  display: block;
}
.options-container {
  width: 250px;
}
</style>
