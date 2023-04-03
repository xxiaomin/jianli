import request from '@/components/TouTiaoBody/utils/request.js'
// import axios from 'axios'
// 获取文章的列表数据
export const getArticleListAPI = (_page, _limit) => {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
