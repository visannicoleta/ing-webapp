import { createStore } from 'vuex';

const store = createStore({
  state: {
    selectedLink: 'home', // Default selected link
  },
  mutations: {
    setSelectedLink(state, link) {
      state.selectedLink = link;
    },
  },
  actions: {
    updateSelectedLink({ commit }, link) {
      commit('setSelectedLink', link);
    },
  },
  getters: {
    selectedLink: (state) => state.selectedLink,
  },
});

export default store;