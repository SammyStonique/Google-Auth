<template>
  <div class="flex bg-black py-3 px-5 mb-5 dark:bg-white dark:text-black">
    <div class="basis-2/3">
      <p id="text1" class="text-white dark:text-black">{{ text }}</p>
    </div>
    <div class="basis-1/3 text-right">
      <button @click="copyText">
        <i
          class="fa fa-clipboard text-right text-white dark:text-black"
          aria-hidden="true"
        ></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["text"],
};
</script>
<style></style>
