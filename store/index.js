export const strict = false

export const state = () => ({
  authenticated: false
})

export const mutations = {
  authenticated: (state, authenticated) => state.authenticated = authenticated
}

export const getters = {
  authenticated: (state) => state.authenticated
}

export const actions = {
  authenticated: ({ commit }, authenticated) => commit('authenticated', authenticated)
}