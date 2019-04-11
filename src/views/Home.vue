<template>
  <div class="home">
    <img alt="emwas logo" class="emwas-logo" src="../assets/logo.png">
    <Search msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/Search.vue'; // @ is an alias to /src

@Component({
  components: {
    Search,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>

@import ../assets/sass/variables

.emwas-logo
  max-width: 0.7 * $medium-screen
  @media screen and (max-width: $medium-screen)
    max-width: 70%

</style>
