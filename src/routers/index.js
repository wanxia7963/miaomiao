import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './Movie'
import cinemaRouter from './Cinema'
import mineRouter from './Mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})
