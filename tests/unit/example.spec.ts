import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Search, {
      propsData: { msg },
    });
    expect(wrapper.findAll('.search__input').length).toEqual(1);
  });
});
