
<template>
  <div class="flex flex-col w-full h-screen">
    <div class="p-4 text-center align-middle m-auto">
      <h1 class="text-4xl font-black mb-2">Manage your Minecraft servers like pro.</h1>
      <p class="text-xl mb-7">mcsv.kr platform. For Sysadmins, Just like you.</p>

      <p class="mb-4">Coming soon...</p>
      <p class="text-sm">Proudly presented by <a class="text-blue-700" href="https://stella-it.com">Stella IT Inc.</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
