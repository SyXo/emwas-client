<template>
  <div class="home">
    <img alt="emwas logo" class="emwas-logo" src="../assets/logo.png">
    <Search/>
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

</style>
