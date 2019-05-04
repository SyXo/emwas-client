<template>
  <div class="videos-list">
    <div v-if="this.videosList.length === 0" class="search-failed">
      <p>
        Your search didn't find anything :/ <br/>
        <router-link to="/">Try another one ?</router-link>
      </p>
    </div>
    <div v-else>
      <div class="return" v-on:click="returnToLastPage">
        &lt;=
      </div>
      <div class="videos-list-wrapper">
        <div class="videos-list-wrapper__video"
          v-for="(currentVideo, index) in currentPageVideosList"
          :key="index"
        >
          <a class="videos-list-wrapper__video__link" :href="currentVideo.url" target="_blank">
            <img
              class="videos-list-wrapper__video__img"
              :src="currentVideo.thumbnailUrl[0]"
              alt="video-img"
            />
            <div class="vid-title">{{ currentVideo.title }}</div>
            <div class="vid-infos">
              <div class="vid-performers">
                <span
                  v-for="(performer, index) in currentVideo.performers"
                  :key="index"
                  class="performer">
                  {{ performer }}<span v-if="index !== currentVideo.performers.length -1">,</span>
                </span>
              </div>
              <div class="vid-length">
                {{ currentVideo.length | displayVidLength }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

@Component({
  filters: {
    displayVidLength(initialLength: string): string {
      let res: string = '';
      const length = Number(initialLength);
      const min = Math.floor(length / 60);
      const sec = length % 60;
      if (min > 0) {
        res += `${min} minutes`;
      }
      if (sec > 0) {
        res += ` and ${sec} seconds`;
      }
      return res;
    },
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
    this.configureImageNumberPerPage();
    window.addEventListener('resize', this.configureImageNumberPerPage);
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.configureImageNumberPerPage);
  }

  configureImageNumberPerPage(): void {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (width >= 1100 && this.$store.state.vidPerPage !== 9) {
      this.$store.commit('setVideoPerPage', 9);
    } else if (this.$store.state.vidPerPage !== 8) {
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

.videos-list-wrapper__video
  margin-bottom: 1em
  &:hover
    box-shadow: 2px 5px 4px 3px transparentize($text-color, 0.8)
    border-top-color: transparentize($text-color, 0.5)

.videos-list-wrapper__video__link
  color: $text-color
  text-decoration: none
  font-weight: normal
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: start
  align-items: center

  .videos-list-wrapper__video__img
    width: 90%
    margin-top: 1rem

.vid-title
  max-width: 90%
  margin-top: 1em
  display: block
  font-weight: bold
  color: $accent-color

.vid-infos
  color: $text-color
  text-decoration: none

</style>
