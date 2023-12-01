import { request } from "@/utils";

// 获取频道列表
export function getChannelAPI() {
  return request({
    url: '/channels',
    method: 'GET',
  });
}

/**
 * 创建文章
 * @param {object} data 表单数据
 * @param {boolean} draft 文章状态 true-草稿，false-发布
 * @returns 
 */
export function createArticleAPI(data, draft = false) {
  console.log(data);
  return request({
    url: `/mp/articles?draft=${draft}`,
    method: 'POST',
    data,
  });
}