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
  return request({
    url: `/mp/articles?draft=${draft}`,
    method: 'POST',
    data,
  });
}

/**
 * 更新文章
 * @param {object} data 表单数据
 * @param {boolean} draft 文章状态 true-草稿，false-发布
 * @returns 
 */
export function updateArticleAPI(data, draft = false) {
  return request({
    url: `/mp/articles/${data.id}?draft=${draft}`,
    method: 'PUT',
    data,
  });
}

/**
 * 获取文章列表
 * @param {object} params 请求参数
 * @returns 
 */
export function getArticleListAPI(params) {
  return request({
    url: '/mp/articles',
    method: 'GET',
    params,
  });
}

/**
 * 删除文章
 * @param {string} id ID
 * @returns 
 */
export function removeArticleListAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'DELETE',
  });
}

/**
 * 文章详情
 * @param {string} id ID
 * @returns 
 */
export function getArticleAPI(id) {
  return request({
    url: `/mp/articles/${id}`,
    method: 'GET',
  });
}