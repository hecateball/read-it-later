import * as admin from 'firebase-admin'

admin.initializeApp()

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'render') {
  exports.render = require('./render')
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'articles-create') {
  exports.articles = exports.articles || {}
  exports.articles.create = require('./articles/create')
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'auth-createUser') {
  exports.auth = exports.auth || {}
  exports.auth.createUser = require('./auth/create-user')
}