<template>
  <div class="videos-list">
    <div v-if="this.videosList.length === 0" class="search-failed">
      <p>
        Your search didn't find anything :/ <br/>
        <router-link to="/">Try another one ?</router-link>
      </p>
    </div>
    <div v-else>
      <header class="top-bar">
        <button class="secondary-button return" v-on:click="returnToLastPage">
          <font-awesome-icon icon="chevron-left" /> Go back
        </button>
      </header>
      <div class="videos-list-wrapper">
        <div class="videos-list-wrapper__video"
             v-for="(currentVideo, index) in currentPageVideosList"
             :key="index"
        >
          <VideoComponent :vid=currentVideo />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { debounce } from 'debounce';
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';
import VideoComponent from '../components/VideoComponent.vue';

@Component({
  components: {
    VideoComponent,
  },
})
export default class VideosList extends Vue {
  @State('videosList') videosList!: [];

  @State('flashMessage') flashMessage!: string;

  @State('currentPage') currentPage!: number;

  @State('vidPerPage') vidPerPage!: number;

  @Getter('currentPageVideosList') currentPageVideosList!: [];

  // https://github.com/ktsn/vuex-class/issues/19

  mounted() {
    window.addEventListener('resize', debounce(this.configureImageNumberPerPage, 300));
    this.configureImageNumberPerPage();
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.configureImageNumberPerPage);
  }

  configureImageNumberPerPage(): void {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width >= 1100 && this.$store.state.vidPerPage !== 9) {
      this.$store.commit('setVideoPerPage', 9);
    } else if (width < 1100 && this.$store.state.vidPerPage !== 8) {
      this.$store.commit('setVideoPerPage', 8);
    }
  }

  returnToLastPage() {
    this.$router.go(-1);
  }
}
</script>


<style lang="sass" scoped>
@import '../assets/sass/variables.sass'

.search-failed
  width: 100%
  height: 85vh
  display: flex
  justify-content: center
  flex-direction: column
  text-align: center

.videos-list-wrapper
  margin-left: 2em
  margin-right: 2em
  display: grid
  @media screen and (min-width: $large-screen)
    grid-template-columns: repeat(3, 30%)
    grid-column-gap: 5%
    grid-row-gap: 2em

  @media screen and (min-width: $medium-screen) and (max-width: $large-screen)
    grid-template-columns: repeat(2, 45%)
    grid-column-gap: 5%
    grid-row-gap: 2em

  @media screen and (max-width: $medium-screen)
    grid-row-gap: 2em

// font awesome icons are translated into svg
svg
  margin-right: 5px

.top-bar
  margin-bottom: 2em
  text-align: left
  margin-left: 3em

.secondary-button
  padding: 10px 22px
</style>
