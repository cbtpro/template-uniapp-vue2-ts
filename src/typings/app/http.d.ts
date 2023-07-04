/**
 * 通用接口响应体
 */
interface ResponseBody<T> {
  code: number;
  success: true;
  data?: T;
  msg: string;
}
