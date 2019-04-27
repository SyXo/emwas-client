import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Search from '@/components/Search.vue';
import * as httpSearch from '@/http/search';
import * as nataliaSearchResult from '../../mocks/http/SearchNatalia';

describe('Search.vue', () => {
  beforeAll(() => {
    httpSearch.default.findVideosWithText = jest.fn().mockResolvedValue(nataliaSearchResult);
  });
  const SearchElementWrapper = mount(Search);

  it('Renders a search bar', () => {
    expect(SearchElementWrapper.findAll('.search__input').length).toEqual(1);
  });

  it('Update prop to HTTP call result when submitting form', async () => {
    SearchElementWrapper.find('.search__input').setValue('Natalia');
    SearchElementWrapper.find('form').trigger('submit');
    await flushPromises();
    expect(SearchElementWrapper.vm.$data.searchResult).not.toEqual({});
    expect(SearchElementWrapper.vm.$data.searchResult).toEqual(nataliaSearchResult);
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });
});
