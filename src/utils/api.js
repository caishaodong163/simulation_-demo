import Http from '@/utils/request'

// 这些都是axios上自带的

// 获取首页帖子的列表信息（这是链接在请求接口上面的,不是url路由上的）
export const getTopics = data => {
  return Http({
    url: '/topics',
    method: 'get',
    params: data
  })
}

// 帖子的详细页面的请求
export const getTopicById = id => {
  return Http({
    url: `/topic/${id}`,
    method: 'get'
  })
}

// 获取用户详细的请求
export const getUserByName = loginname => {
  return Http({
    url: `/user/${loginname}`,
    method: 'get'
  })
}
