import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import flushPromises from 'flush-promises';
import Home from '@/views/Home.vue';
import * as httpSearch from '@/http/HttpSearch';
import store from '@/store/store';
import router from '@/router';

// add fontawesome icon for test not to warn
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInfoCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// \fontawesome

describe('Home.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const homeElement = mount(Home, { localVue, store, router });

  it('should render one image with emwas-logo class', () => {
    expect(homeElement.findAll('img.emwas-logo').length).toBe(1);
  });

  it('should have an image with emwas-logo class AND an emwas logo alt attribute', () => {
    expect(homeElement.find('img').attributes('alt')).toBe('emwas logo');
  });

  httpSearch.default.findVideosWithText = jest.fn().mockResolvedValueOnce(null);

  it('Creates a flash message when Search is triggered on less than 3 chars', async () => {
    homeElement.find('.search__input').setValue('a');
    homeElement.find('form').trigger('submit');
    await flushPromises();
    expect(homeElement.findAll('.flash-info').length).toBe(1);
    expect(homeElement.find('.flash-info__content').text()).toContain('You need to search on at least 3 characters');
  });

  it('Resets flash message when correctly when correcting a failure', async () => {
    homeElement.find('.search__input').setValue('aa');
    homeElement.find('form').trigger('submit');
    await flushPromises();
    homeElement.find('.search__input').setValue('Lena Paul');
    homeElement.find('form').trigger('submit');
    await flushPromises();
    expect(homeElement.findAll('.flash-info__content').length).toBe(0);
    expect(homeElement.vm.$store.state.flashMessage).toBe('');
  });
});
