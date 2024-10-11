import CryptoJS from "crypto-js";

const salt = "AXBOOT!!";
const key = CryptoJS.enc.Utf8.parse(salt); // 16바이트 키
const iv = CryptoJS.enc.Utf8.parse(salt); // 16바이트 IV

/* 복호화 */
export const aes_decrypt = (text: string) => {
  // 값이 없을 경우 빈 문자열 반환
  if (!text) return "";
  return CryptoJS.AES.decrypt(text, key, { iv: iv }).toString(CryptoJS.enc.Utf8);
};

export const aes_encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, key, { iv: iv }).toString();
};
