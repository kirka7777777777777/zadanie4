import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('myAppToken') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  mutations: {
  },
  actions: {
    AUTH_REQUEST: ({ commit}, user) => {
      return new Promise((resolve,reject) => {
        loginRequest(user)
            .then((token) => {
          commit('AUTH_SUCCESS', token);
          localStorage.setItem('myAppToken', token);
          resolve();
        })
            .catch(() => {
          commit('AUTH_ERROR');
          localStorage.removeItem('myAppToken');
          reject();
        });
      });
    }
  },
  modules: {
  }
})
