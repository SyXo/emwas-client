import { mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  const msg = 'new message';
  const SearchElementWrapper = mount(Search, {
    propsData: { msg },
  });

  it('renders props.msg when passed', () => {
    expect(SearchElementWrapper.findAll('.search__input').length).toEqual(1);
  });
});
