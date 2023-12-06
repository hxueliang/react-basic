export { setToken, getToken, removeToken } from './token';

export {
  fileToBlob,
  blobToFile,
  fileToBase64,
  base64ToFile,
  base64ToHex,
  hexToFile,
} from './file-change';

// 注意：request要在getToken后导入，不多会报错
// 因为request，引入了@/router
// 然@/router，引入了@/components/50/AuthRoute
// 而AuthRoute，又引入了@/utils，即当前模块
// 所以getToken要先导入，request要后导入
export { request } from "./request";
