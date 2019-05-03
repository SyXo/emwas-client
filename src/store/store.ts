/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    videosList: [],
    flashMessage: '',
    currentPage: 1,
    vidPerPage: 8,
  },
  mutations: {
    updateVideosList: (state, newVideosList) => {
      state.videosList = newVideosList;
    },
    setCurrentPage: (state, page: number) => {
      state.currentPage = page;
    },
    setFlashMessage: (state, message: string) => {
      state.flashMessage = message;
    },
    setVideoPerPage: (state, vidNumber: number) => {
      state.vidPerPage = vidNumber;
    },
  },
  getters: {
    currentPageVideosList: state => state.videosList.slice(
      ((state.currentPage - 1) * state.vidPerPage),
      (state.currentPage * state.vidPerPage),
    ),
  },
};

export default new Vuex.Store<RootState>(store);
