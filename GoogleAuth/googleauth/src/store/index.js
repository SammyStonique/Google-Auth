import { createStore } from 'vuex'

export default createStore({
  state: {
    access_token: '',
    refresh_token: '',
    isAuthenticated: false,
    reloaded: false,
  },
  getters: {
  },
  mutations: {
    setAccessToken(state,a_token){
      state.access_token = a_token;
      state.isAuthenticated = true
    },
    removeAccessToken(state){
      state.access_token = ''
      state.isAuthenticated = false
      localStorage.setItem('access_token',state.access_token)
    },
    removeRefreshToken(state){
      state.refresh_token = ''
      state.isAuthenticated = false
      localStorage.setItem('refresh_token',state.access_token)
    },
    setRefreshToken(state,r_token){
      state.refresh_token = r_token
    },
    reloadingPage(state){
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
        // console.log('Value of reload in store set to false')
        } else {
            // Set a flag so that we know not to reload the page twice.
            localStorage.setItem('reloaded', 'true');
            // console.log(state.reloaded,'Reload')
            window.location.reload();
        }
    },
  },
  actions: {
  },
  modules: {
  }
})
