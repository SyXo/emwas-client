import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VideosList from '@/views/VideosList.vue';
import store from '@/store/store';
import router from '@/router';
import longResult from '../../mocks/http/longResult';

function resizeWindow(width: number, height: number = 450) {
  // @ts-ignore
  window.innerWidth = width;
  // @ts-ignore
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
}

let mixinTriggered = false;
const mixin = {
  beforeDestroy() {
    mixinTriggered = true;
  },
};

describe('VideosList.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const videosListEl = mount(VideosList, {
    localVue,
    store,
    router,
    mixins: [mixin],
  });

  it('should have an element with the video-list class', () => {
    expect(videosListEl.findAll('.videos-list').length).toBe(1);
  });

  it('should have the good number of videos displayed', () => {
    videosListEl.vm.$store.commit('updateVideosList', longResult);
    videosListEl.vm.$store.commit('setVideoPerPage', 10);
    videosListEl.vm.$store.commit('setCurrentPage', 2);
    expect(videosListEl.findAll('.videos-list-wrapper__video').length).toBe(6);
  });

  it('should link to the original video', () => {
    videosListEl.vm.$store.commit('updateVideosList', longResult);
    videosListEl.vm.$store.commit('setVideoPerPage', 10);
    videosListEl.vm.$store.commit('setCurrentPage', 2);
    expect(
      videosListEl.findAll('.videos-list-wrapper__video__link').at(5).attributes('href'),
    ).toBe('https://www.julesjordan.com/trial/scenes/Jane-Wilde-Teen-Anal-Facial-Old-Man-Christmas-Porn-4k_vids.html');
  });

  it('should display the length of the video as x minutes and x seconds', () => {
    videosListEl.vm.$store.commit('updateVideosList', longResult);
    videosListEl.vm.$store.commit('setVideoPerPage', 10);
    videosListEl.vm.$store.commit('setCurrentPage', 2);
    const links = videosListEl.findAll('.videos-list-wrapper__video__link');
    expect(
      links.at(5).find('.vid-length').text(),
    ).toBe('30 minutes');
    expect(
      links.at(4).find('.vid-length').text(),
    ).toBe('56 minutes and 1 seconds');
  });

  it('should provide a "back to last page" option', () => {
    const goBack = videosListEl.findAll('.return');
    expect(goBack.length).toBe(1);
    goBack.trigger('click');
    expect(videosListEl.vm.$router.currentRoute).not.toBe('/search-result');
  });

  it('should adapt the number of video per page to the browser width', () => {
    resizeWindow(400);
    expect(videosListEl.vm.$store.state.vidPerPage).toBe(8);
    resizeWindow(1300);
    expect(videosListEl.vm.$store.state.vidPerPage).toBe(9);
  });

  it('should unlink videoPerPage event watcher on element destruction', () => {
    videosListEl.destroy();
    expect(mixinTriggered).toBe(true);
  });
});
