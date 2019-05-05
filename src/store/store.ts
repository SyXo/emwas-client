/* eslint no-param-reassign: 0 */
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import localForage from 'localforage';
import RootState from './types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    videosList: [],
    flashMessage: '',
    currentPage: 1,
    vidPerPage: 8,
  },

  actions: {
    videosListFromStorage: async (context) => {
      const inStorage = await localForage.getItem('lastSearchResult');
      if (Array.isArray(inStorage)) {
        context.commit('updateVideosList', inStorage);
      }
    },
    updateVideosListStoreResults: async (context, payload) => {
      context.commit('updateVideosList', payload);
      await localForage.setItem('lastSearchResult', payload);
    },
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
    lastPage: state => Math.ceil(state.videosList.length / state.vidPerPage),
  },
};

export default new Vuex.Store<RootState>(store);
