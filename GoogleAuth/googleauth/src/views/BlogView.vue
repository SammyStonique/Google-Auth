<template>
  <div>
    <div class="header fixed bg-white">
    <Header />
    <Header2 />
    </div>
    <!-- <div class="mt-10 flex flex-wrap mx-5 mb-10"> -->
      <div class="sidenav fixed p-10 bg-slate-300">
        <h3 lass="capitalize font-semibold text-center text-xl">About the Author</h3>
        <div class="h-60 w-60 overflow-hidden mt-5 mb-5">
          <img
            class="object-cover opacity-75"
            src="@/assets/profile.jpg"
            alt="Author Image"
          />
        </div>
        <p>
          SammyB is a Computer Science graduate from the Technical University of Mombasa
          who is very passionate about making a difference in the community through
          technological innovations.
        </p>
      </div>
      <div class="main-content p-10">
        <h3 class="capitalize text-xl font-bold mb-5">
          How To Authenticate Users using social apps in Django
        </h3>
        <p>
          In order to authenticate users using their social accounts such as Google,
          Facebook and Twitter, django provides a tool called
          <a
            class="text-blue-900 hover:underline"
            href="https://django-allauth.readthedocs.io/en/latest/installation.html"
            target="_blank"
            >django-allauth</a
          >. In this example, we will go through how to set up authentication using
          Google.
        </p>
        <h3 class="mt-10 font-bold text-2xl">Prerequisites</h3>
        <p class="my-5">
          You will need to have Python3 and Django installed in your machine
        </p>
        <h3 class="mt-5 font-bold text-2xl">Step 1</h3>
        <p class="my-5">
          First, we will need to install the
          <a
            class="text-blue-900 hover:underline"
            href="https://django-allauth.readthedocs.io/en/latest/installation.html"
            target="_blank"
            >django-allauth</a
          >
          package
        </p>
        <Clipboard :text="text1" />
        <p class="mb-5">In your settings.py file, add the following changes:</p>
        <div class="bg-black text-white p-4 mb-5">
          <p class="">
            <p class="text-green-400 opacity-50 text-sm mb-4"># Specify the context processors as follows:</p>
            TEMPLATES = [ <br/><p class="indent-8">{</p>
            <p class="indent-16 text-yellow-300 opacity-75">'BACKEND': 'django.template.backends.django.DjangoTemplates',</p>
            <p class="indent-16 text-yellow-300 opacity-75">'DIRS': [],</p>
            <p class="indent-16 text-yellow-300 opacity-75">'APP_DIRS': True,</p>
            <p class="indent-16 text-yellow-300 opacity-75">'OPTIONS': {</p>
            <p class="indent-24 text-yellow-300 opacity-75">'context_processors': [</p>
           <p class="indent-32 mb-4 text-green-400 opacity-50 text-sm"> # Already defined Django-related contexts here </p>
            <p class="indent-32 text-green-400 opacity-50 text-sm"># `allauth` needs this from django</p>
            <p class="indent-32 text-yellow-300 opacity-75">'django.template.context_processors.request',</p>
            <p class="indent-24">],</p>
            <p class="indent-16">},</p>
            <p class="indent-8">},</p>
            <p class="mb-4">]</p>
            AUTHENTICATION_BACKENDS = [<br />
            <p class="indent-16">...</p>
            <p class="indent-16 text-green-400 opacity-50 text-sm"># Needed to login by username in Django admin, regardless of `allauth`</p> 
            <p class="indent-16 mb-4 text-yellow-300 opacity-75">'django.contrib.auth.backends.ModelBackend',</p>
            <p class="indent-16 text-green-400 opacity-50 text-sm"># `allauth` specific authentication methods, such as login by e-mail</p>
            <p class="indent-16 text-yellow-300 opacity-75">'allauth.account.auth_backends.AuthenticationBackend',</p> 
            <p class="indent-16">... </p>]
          </p>
          
        </div>
        <p class="mb-5">In your installed apps settings, add the following apps:</p>
        <div class="bg-black text-white p-4 mb-5">
        <p>INSTALLED APPS = [</p>
        <p class="indent-8">...</p>
        <p class="indent-8 text-green-400 opacity-50 text-sm"># The following apps are required:</p>
        <p class="indent-8 text-yellow-300 opacity-75">'django.contrib.auth',</p>
        <p class="indent-8 text-yellow-300 opacity-75">'django.contrib.messages'</p>
        <p class="indent-8 text-yellow-300 opacity-75 mb-4">'django.contrib.sites',</p>
        <p class="indent-8 text-yellow-300 opacity-75">'allauth',</p>
        <p class="indent-8 text-yellow-300 opacity-75">'allauth.account',</p>
        <p class="indent-8 text-yellow-300 opacity-75 mb-4">'allauth.socialaccount',</p>
        <p class="indent-8 text-green-400 opacity-50 text-sm"># ... include the providers you want to enable(In our case its Google)</p>
        <p class="indent-8 text-yellow-300 opacity-75">'allauth.socialaccount.providers.google',</p>
        <p class="indent-8">...</p>
        <p>]</p>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import Header from "@/components/Header.vue";
import Header2 from "@/components/Header2.vue";
import Clipboard from "@/components/Clipboard.vue";
export default {
  data() {
    return {
      text1: "pip install django-auth",
      text2: "",
    };
  },
  methods: {
    copyText() {
      let text1 = document.getElementById("text1");
      text1.select();
      document.execCommand("copy");
      this.$toast.success("Copied", {
        duration: 2000,
        position: top,
      });
    },
  },
  components: { Header, Header2, Clipboard, Clipboard },
};
</script>
<style scoped>

.header{
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
}
.sidenav{
  width: 350px;
  z-index: 1;
  /* margin-top: 95px; */

}
.main-content{
  margin-left: 350px;
  margin-top: 95px;
  z-index: -1;
}
</style>
