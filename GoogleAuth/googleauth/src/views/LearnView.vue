<template>
  <div class="dark:bg-slate-800">
    <div class="header fixed bg-white dark:bg-slate-800">
      <Header />
      <Header2 />
    </div>
    <div class="sidenav fixed p-10 bg-slate-300 dark:bg-slate-700 dark:text-white">
      <h3 lass="capitalize font-bold text-center text-xl">About the Author</h3>
      <div class="h-60 w-60 overflow-hidden mt-5 mb-5">
        <img
          class="object-cover opacity-75"
          src="@/assets/profile.jpg"
          alt="Author Image"
        />
      </div>
      <p>
        SammyB is a Computer Science graduate from the Technical University of Mombasa who
        is very passionate about making a difference in the community through
        technological innovations.
      </p>
    </div>
    <div class="main-content p-10 dark:bg-slate-800 dark:text-white">
      <h3 class="capitalize text-xl font-bold mb-5">
        How To Generate QR codes in VueJs.
      </h3>
      <p class="mb-4">
        To use QR codes with vue 3, you'll need to install the following package:
      </p>
      <Clipboard :text="text1" />
      <p class="mb-5">Usage</p>
      <div class="bg-black text-white p-4 mb-5 dark:bg-white dark:text-black">
        <p>&lt;template&gt;</p>
        <p
          class="indent-8 text-yellow-300 opacity-75 dark:text-orange-800 dark:opacity-100"
        >
          &lt;qrcode-vue :value="value" :size="size" level="H" /&gt;
        </p>
        <p>&lt;/template&gt;</p>
        <p class="mt-4">&lt;script&gt;</p>
        <p class="text-yellow-300 opacity-75 dark:text-orange-800 dark:opacity-100">
          import QrcodeVue from 'qrcode.vue'
        </p>

        <p>export default {</p>
        <p class="indent-8">data() {</p>
        <p class="indent-12">return {</p>
        <p
          class="indent-16 text-yellow-300 opacity-75 dark:text-orange-800 dark:opacity-100"
        >
          value: 'https://example.com',
        </p>
        <p
          class="indent-16 text-yellow-300 opacity-75 dark:text-orange-800 dark:opacity-100"
        >
          size: 300,
        </p>
        <p class="indent-12">}</p>
        <p class="indent-8">},</p>
        <p>components: {</p>
        <p
          class="indent-8 text-yellow-300 opacity-75 dark:text-orange-800 dark:opacity-100"
        >
          QrcodeVue,
        </p>
        <p class="indent-8">},</p>
        <p>}</p>
        <p>&lt;/script&gt;</p>
      </div>
      <p class="mb-4">The output should be a QR code like this:</p>
      <div class="place-content-center bg-gray-200 py-5">
        <qrcode-vue class="w-1/2 m-auto" :value="value" :size="size" level="H" />
      </div>
    </div>
  </div>
</template>

<script>
import QrcodeVue from "qrcode.vue";
import Header from "@/components/Header.vue";
import Header2 from "@/components/Header2.vue";
import Clipboard from "@/components/Clipboard.vue";
export default {
  data() {
    return {
      text1: "npm install --save qrcode.vue",
      value: "https://youtube.com",
      size: 300,
    };
  },
  components: { Header, Header2, Clipboard, QrcodeVue },
};
</script>

<style>
.header {
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
}
.sidenav {
  width: 350px;
  z-index: 0;
  margin-top: 1px;
}
.main-content {
  margin-left: 350px;
  margin-top: 95px;
  z-index: -1;
}
</style>
