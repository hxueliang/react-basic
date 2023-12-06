// https://frontend.devrank.cn/traffic-information/7263049484819679289

/**
 * file转blob
 * @param {File} file 文件
 * @returns blob
 */
function fileToBlob(file) {
  return window.URL.createObjectURL(file);
}

/**
 * blob转file
 * @param {Blob} blob blob
 * @param {String} fileName 文件名
 * @param {String} mimeType 文件类型
 *  {image/jpeg} jpeg格式的图片
 *  {image/jpg}  jpg格式的图片
 *  {image/png}  png格式的图片
 *  {image/git}  git格式的图片
 *  {text/plain} 纯文本文件
 *  {text/html}  html文档
 *  {audio/mpeg} mp3格式的音频文件
 *  {video/mp4}  mp4格式的视频文件
 *  {application/pdf}  pdf文档
 *  {application/json} json数据
 * @returns file
 */
function blobToFile(blob, fileName, mimeType) {
  const file = new File([blob], fileName, { type: mimeType });
  return file;
}

/**
 * file转base64
 * @param {File} file 文件
 * @returns base64
 */
function fileToBase64(file) {
  return new Promise((resolve, reject) => {

    // 使用FileReader对象异步读取文件的内容
    const reader = new FileReader();
    let readerResult = '';

    // 开始读取
    reader.readAsDataURL(file);

    // 操作完成时触发
    reader.onload = function () {
      readerResult = reader.result;
    };

    // 读取操作发生错误时触发
    reader.onerror = function (error) {
      reject(error);
    };

    // 读取操作结束时触发（要么成功、要么失败）
    reader.onloadend = function () {
      resolve(readerResult);
    };
  });
}

/**
 * base64转file
 * @param {String} base64 base64
 * @param {String} fileName 文件名 
 * @returns file
 */
function base64ToFile(base64, fileName = 'file') {
  const arr = base64.split(',');

  // 文件类型
  const mime = arr[0].match(/:(.*?);/)[1];

  // 文件后缀
  const suffix = mime.split('/')[1];

  // base64解码
  const bstr = atob(arr[1]);

  let n = bstr.length;

  // 一个8位无符号整型数组
  // eslint-disable-next-line no-undef
  let u8arr = new Unit8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], `${fileName}.${suffix}`, {
    type: mime
  });
}

/**
 * base64转hex
 * @param {String} base64 base64 
 * @returns hex十六进制
 */
function base64ToHex(base64) {
  const arr = base64.split(',');

  // 对base64编码的字符串进行解码
  const raw = atob(arr[1]);

  let HEX = '';

  for (let i = 0; i < raw.length; i++) {
    // charCodeAt()得到二进制，二进制通过toString(16)转成十六进制
    const _hex = raw.charCodeAt(i).toString(16);
    HEX += (_hex.length === 2 ? _hex : '0' + _hex);
  }
  return HEX.toUpperCase();
}

/**
 * base64转hex
 * @param {String} hex hex十六进制 
 * @param {String} fileName 文件名 
 * @param {String} mimeType 文件类型
 * @returns file
 */
function hexToFile(hexString, fileName, mimeType) {
  // 将十六进制字符串转成字节数组
  const bytes = hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16));

  // 从字节数组创建一个Blob对象
  // eslint-disable-next-line no-undef
  const blob = new Blob([new UintBArray(bytes)], { type: mimeType });

  // 从Blob创建一个File对象
  const file = new File([blob], fileName, { type: mimeType });

  return file;
}

export {
  fileToBlob,
  blobToFile,
  fileToBase64,
  base64ToFile,
  base64ToHex,
  hexToFile,
};