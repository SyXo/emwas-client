import longResult from '../../mocks/http/longResult';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import Pagination from '@/components/Pagination.vue';
import store from '@/store/store';

describe('Pagination.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const paginationEl = mount(Pagination, { store });

  it('should send to first and last page with pagination buttons', () => {
    paginationEl.vm.$store.commit('updateVideosList', longResult);
    paginationEl.vm.$store.commit('setVideoPerPage', 3);
    paginationEl.find('#pagination-go-to-start').trigger('click');
    expect(paginationEl.vm.$store.state.currentPage).toBe(1);
    paginationEl.find('#pagination-go-to-end').trigger('click');
    expect(paginationEl.vm.$store.state.currentPage).toBe(6);
  });

  it('should have a switchable button/input element', () => {
    paginationEl.vm.$store.commit('setCurrentPage', 1);
    const form = paginationEl.find('#buttonWithText');
    form.find('#toggle').trigger('click');
    expect(form.findAll('#input').length).toBe(1);
  });

  it('should have a switchable button/input that does not allow negative or 0 page number', () => {
    const form = paginationEl.find('#buttonWithText');
    form.find('#input').setValue('-4');
    form.trigger('submit');
    expect(paginationEl.vm.$store.state.currentPage).toBe(1);
    form.find('#input').setValue('0');
    form.trigger('submit');
    expect(paginationEl.vm.$store.state.currentPage).toBe(1);
  });

  it('should have a switchable button/input that does not allow extreme high page number', () => {
    const form = paginationEl.find('#buttonWithText');
    form.find('#input').setValue('160');
    form.trigger('submit');
    expect(paginationEl.vm.$store.state.currentPage).toBe(1);
  });

  it('should have a switchable button/input that sends you to a page if your page number is valid', () => {
    const form = paginationEl.find('#buttonWithText');
    form.find('#input').setValue('3');
    form.trigger('submit');
    expect(paginationEl.vm.$store.state.currentPage).toBe(3);
  });
});
