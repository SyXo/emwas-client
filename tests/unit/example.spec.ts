import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  it('has one and only one search input', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Search, {
      propsData: { msg },
    });
    expect(wrapper.findAll('.search__input').length).to.eql(1);
  });
});
