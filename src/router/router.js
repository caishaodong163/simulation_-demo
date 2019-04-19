import Home from '@/views/Home.vue'
import Topic from '@/views/Topic.vue'
import User from '@/views/User.vue'
/* 
 * 重新定向 
 */

function loadView(view) {
  return () => import(`@/views/${view}.vue`)
}

// let arr = [{
//     name: 'home',
//     path: '/home',
//     component: loadView(Home)
//   },
//   {
//     name: 'topic',
//     path: '/topic',
//     component: loadView(Topic)
//   },
//   {
//     name: 'user',
//     path: '/user',
//     component: loadView(User)
//   },
// ]

let arr = [{
  path: '/',
  name: 'home',
  component: Home
},
{
  path: '/topic/:id',
  name: 'topic',
  component: Topic
},
{
  path: '/user/:id',
  name: 'user',
  component: User
},
{
  path: '/topic',
  redirect: '/'
},
{
  path: '/user',
  redirect: '/'
}]

export default arr
