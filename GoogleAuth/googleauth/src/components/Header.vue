<template>
  <div>
    <nav
      class="h-12 border border-b-1 border-gray-300 flex pt-1 pb-1 border-x-0 border-t-0"
    >
      <div class="mx-2 flex-initial select-none">
        <router-link to="" class="ml-5 mr-10">
          <small class="text-3xl text-blue-500 font-normal">G</small
          ><small class="text-2xl text-red-400 font-normal">o</small
          ><small class="text-2xl text-yellow-400 font-normal">o</small
          ><small class="text-2xl text-blue-500 font-normal">g</small
          ><small class="text-2xl text-green-500 font-normal">l</small>
          <small class="text-2xl text-red-400 font-normal">e </small>
          <small class="text-2xl text-gray-500">Developers</small>
        </router-link>
      </div>
      <div class="dropdown">
        <router-link
          to=""
          class="display-content mr-3 align-baseline pb-4 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
          >Products<i class="fa fa-caret-down ml-2" aria-hidden="true"></i
        ></router-link>
        <div
          class="dropdown-content absolute flex w-1/2 bg-white mt-5 border p-4 text-black text-sm border-gray-300 shadow-xl rounded"
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
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
        >Events</router-link
      >
      <router-link
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
        >Learn</router-link
      >
      <router-link
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
        >Developer Profile</router-link
      >
      <router-link
        to=""
        class="mr-3 ml-4 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
        >Blog</router-link
      >
      <router-link
        to=""
        class="ml-4 mr-10 mt-2 h-9 text-sm text-gray-500 hover:text-black/75 hover:border hover:border-x-0 hover:border-t-0 hover:border-b-4 hover:border-black/50 focus:text-black focus:border focus:border-x-0 focus:border-t-0 focus:border-b-4 focus:border-black"
        >More<i class="fa fa-caret-down ml-2" aria-hidden="true"></i
      ></router-link>
      <i class="fa fa-search ml-20 mt-3" aria-hidden="true"></i>
      <input
        class="w-40 bg-gray-200 rouded mr-5 text-sm focus:outline-none"
        type="text"
        placeholder="Search"
      />
      <button
        class="rounded border border-gray-400 py-1 px-3 text-sm text-gray-500 hover:bg-gray-200"
      >
        English
      </button>
      <button
        class="ml-5 rounded-full border w-10 text-gray-500 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black"
      >
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </button>
      <div class="rounded-full w-10 ml-5 overflow-hidden">
        <img
          src="./../assets/profile.jpg"
          alt="Profile Pic"
          class="w-full h-full object-cover"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dropdown-content {
  display: none;
}
.dropdown:hover .dropdown-content {
  display: flex;
}
.display-content:focus .dropdown-content {
  display: flex;
}
</style>
