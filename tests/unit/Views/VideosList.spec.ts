import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VideosList from '@/views/VideosList.vue';
import store from '@/store/store';
import longResult from '../../mocks/http/longResult';

describe('VideosList.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const videosListEl = mount(VideosList, { localVue, store });

  it('should have an element with the video-list class', () => {
    expect(videosListEl.findAll('.videos-list').length).toBe(1);
  });
});
