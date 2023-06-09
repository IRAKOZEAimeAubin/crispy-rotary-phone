<template>
  <div id="nav" class="flex gap-2 font-bold uppercase text-lg items-center justify-center p-8 text-slate-900">
    <router-link to="/" class="bg-lime-200">Home</router-link>
  </div>
  <router-view />
</template>

<style>
#nav a {
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #082f49;
}
</style>