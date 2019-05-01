import { mount, createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import Search from '@/components/Search.vue';
import store from '@/store/store';
import * as httpSearch from '@/http/search';
import * as nataliaSearchResult from '../../mocks/http/SearchNatalia';

describe('Search.vue', () => {
  beforeAll(() => {
    httpSearch.default.findVideosWithText = jest.fn().mockResolvedValue(nataliaSearchResult);
  });
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const SearchElementWrapper = mount(Search, { localVue, store });

  it('Renders a search bar', () => {
    expect(SearchElementWrapper.findAll('.search__input').length).toEqual(1);
  });

  it('Update state to HTTP call result when submitting form', async () => {
    SearchElementWrapper.find('.search__input').setValue('Natalia');
    SearchElementWrapper.find('form').trigger('submit');
    await flushPromises();
    expect(SearchElementWrapper.vm.$store.state.videosList).toEqual(nataliaSearchResult);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
