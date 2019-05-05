import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VideosList from '@/views/VideosList.vue';
import store from '@/store/store';
import router from '@/router';

// add fontawesome icon for test not to warn
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import longResult from '../../mocks/http/longResult';
import shortResult from '../../mocks/http/SearchNatalia';

library.add(faChevronLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// \fontawesome

/* Usefull when testing resizing but we need to mock debounce (see test below)
function resizeWindow(width: number, height: number = 450) {
  // @ts-ignore
  window.innerWidth = width;
  // @ts-ignore
  window.innerHeight = height;
  window.dispatchEvent(new Event('resize'));
}
*/

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

  it('should provide a "back to last page" option', () => {
    const goBack = videosListEl.findAll('.return');
    expect(goBack.length).toBe(1);
    goBack.trigger('click');
    expect(videosListEl.vm.$router.currentRoute).not.toBe('/search-result');
  });


  // Need to mock debounce to make this test work and can't find a way to achieve it easily
  // Seems pretty much impossible with the lib we are using
  // https://github.com/component/debounce/issues/22
  /*
  it('should adapt the number of video per page to the browser width', () => {
    debounce.mockImplementation('debounce', () => fn => fn);
    resizeWindow(400);
    expect(videosListEl.vm.$store.state.vidPerPage).toBe(8);
    resizeWindow(1300);
    expect(videosListEl.vm.$store.state.vidPerPage).toBe(9);
  });
  */

  it('should not include pagination on low number of results', () => {
    videosListEl.vm.$store.commit('updateVideosList', shortResult);
    videosListEl.vm.$store.commit('setVideoPerPage', 10);
    expect(videosListEl.findAll('page-navigation').length).toBe(0);
  });

  it('should unlink videoPerPage event watcher on element destruction', () => {
    videosListEl.destroy();
    expect(mixinTriggered).toBe(true);
  });
});
