export const state = () => ({
  articles: []
})

export const mutations = {
  articles: (state, articles) => state.articles = articles
}

export const getters = {
  articles: (state) => state.articles
}

export const actions = {
  articles: ({ commit }, articles) => commit('articles', articles.map((snapshot) => ({
    id: snapshot.id,
    url: snapshot.get('url'),
    title: snapshot.get('title'),
    description: snapshot.get('description'),
    image: snapshot.get('image'),
    createdAt: snapshot.get('createdAt', { serverTimestamps: 'estimate' }).toDate().toLocaleString('ja-JP')
  })))
}