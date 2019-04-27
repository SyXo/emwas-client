import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import flushPromises from 'flush-promises';
import * as httpSearch from '@/http/search';

// add fontawesome icon for test not to warn
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faInfoCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// \fontawesome

describe('Home.vue', () => {
  const homeElement = mount(Home);
  it('should render one image with emwas-logo class', () => {
    expect(homeElement.findAll('img.emwas-logo').length).toBe(1);
  });

  it('should have an image with emwas-logo class AND an emwas logo alt attribute', () => {
    expect(homeElement.find('img').attributes('alt')).toBe('emwas logo');
  });

  httpSearch.default.findVideosWithText = jest.fn().mockResolvedValue(null);

  it('Creates a flash message when Search is triggered on less than 3 chars', async () => {
    homeElement.find('.search__input').setValue('Lena Paul');
    homeElement.find('form').trigger('submit');
    await flushPromises();
    expect(homeElement.findAll('.flash-info').length).toBe(1);
    expect(homeElement.find('.flash-info__content').text()).toContain('You need to search on at least 3 characters');
  });
});
