import api from "../api/api";

export default {
  namespaced: true,
  state: {
    loading: false,
    deadline: new Date("Apr 26 2021 14:59:59"),
    deadline2: new Date("22 Mei 2021 23:59:59")
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
      commit("LOADING");
      return api.recruitment.postRecruitment(data).then(tes => {
        // console.log(tes);
        commit("LOADED");
        return tes;
      });
      // .catch(err => {
      // commit("LOADED");
      // console.log(err);
      // return err.response.data;
      // });
    },
    getDetailNim({ commit }, data) {
      commit("LOADING");
      return api.recruitment.getDetailNim(data).then(({ data }) => {
        commit("LOADED");
        return data;
      });
      // .catch(err => {
      // commit("LOADED");
      // console.log(err);
      // return err.response.data;
      // });
    },
    getTahap1({ commit }, data) {
      commit("LOADING");
      return api.recruitment.getTahap1(data).then(({ data }) => {
        commit("LOADED");
        return data;
      });
    }
  },
  getters: {
    loading: state => state.loading
  }
};
