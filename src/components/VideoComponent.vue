<template>
    <a class="video-link" :href="vid.url" target="_blank">
      <img
        class="video-image"
        :src="vid.thumbnailUrl[0]"
        alt="video-img"
      />
      <div class="video-title">{{ vid.title }}</div>
      <div class="video-infos">
        <div class="video-performers">
          <span
            v-for="(performer, index) in vid.performers"
            :key="index"
            class="performer">
            {{ performer }}<span v-if="index !== vid.performers.length -1">,</span>
          </span>
        </div>
        <div class="video-length">
          {{ vid.length | displayVidLength }}
        </div>
      </div>
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

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
export default class VideoComponent extends Vue {
  @Prop() vid!: any;
}
</script>

<style lang="sass">
@import '../assets/sass/variables.sass'

.videos-list-wrapper__video
  margin-bottom: 1em
  &:hover
    box-shadow: 2px 5px 4px 3px $shadow-color
    border-top-color: transparentize($text-color, 0.5)

.video-link
  color: $text-color
  text-decoration: none
  font-weight: normal
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: center

  .video-image
    width: 90%
    margin-top: 1rem

.video-title
  max-width: 90%
  margin-top: 1em
  display: block
  font-weight: bold
  color: $accent-color

.video-infos
  color: $text-color
  text-decoration: none

</style>
