import api from '../api/api';

export default {
  namespaced: true,
  state: {
    loading: false,
  },
  mutations: {
    LOADING(state) {
      state.loading = true;
    },
    LOADED(state) {
      state.loading = false;
    }
  },
  actions: {
    postRecruitment({ commit }, data) {
      commit('LOADING');
      return api.recruitment
        .postRecruitment(data)
        .then(({ data }) => {
          commit('LOADED');
          return data;
        })
        .catch(err => {
          commit('LOADED');
          console.log(err)
          // return err.response.data;
        });
    }
  },
  getters: {
    loading: state => state.loading,
  }
};
