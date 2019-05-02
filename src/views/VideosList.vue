<template>
  <div class="videos-list">
    <div class="videos-list__video"
      v-for="(currentVideo, index) in currentPageVideosList"
      :key="index"
    >
      {{ currentVideo.title }}
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

@Component
export default class VideosList extends Vue {
  @State('videosList') videosList!: [];

  @State('flashMessage') flashMessage!: string;

  @State('currentPage') currentPage!: number;

  @State('vidPerPage') vidPerPage!: number;

  @Getter('currentPageVideosList') currentPageVideosList!: [];

  // https://github.com/ktsn/vuex-class/issues/19
}
</script>


<style lang="sass" scoped>

</style>
