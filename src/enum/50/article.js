/** 草稿 */
export const DRAFT = 0;
/** 待审核 */
export const PENDING_REVIEW = 1;
/** 审核通过 */
export const PASS = 2;
/** 审核失败 */
export const AUDIT_FAILURE = 3;

/**
 * 文章状态
 */
export const ARTICLE_STATUS = {
  /** 草稿 */
  [DRAFT]: '草稿',
  /** 待审核 */
  [PENDING_REVIEW]: '待审核',
  /** 审核通过 */
  [PASS]: '审核通过',
  /** 审核失败 */
  [AUDIT_FAILURE]: '审核失败',
};

/**
 * 文章状态颜色
 */
export const ARTICLE_STATUS_COLOR = {
  /** 待审核 */
  [PENDING_REVIEW]: 'warning',
  /** 审核通过 */
  [PASS]: 'success',
};