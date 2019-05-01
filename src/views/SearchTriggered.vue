<template>
  <div class="search-triggered">
    <Search
      v-on:updatevideosList="updatevideosList"
    />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SearchTriggered extends Vue {

}
</script>


<style lang="sass">

</style>
