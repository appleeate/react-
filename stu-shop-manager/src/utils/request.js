import axios from "axios";
import { getToken } from "./auth";

const instace = axios.create({
  baseURL: "http://localhost:3009",
  timeout: 5000,
});
//全局请求拦截 发送请求之前执行
instace.interceptors.request.use(
  function (config) {
    config.headers["authorization"] = "Bearer " + getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//请求返回之后执行
instace.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * get请求
 * @param {*} url 请求地址 url参数
 * @param {*} params  查询提交
 */
export function get(url, params) {
  return instace.get(url, {
    params,
  });
}

export function post(url, data) {
  return instace.post(url, data);
}
export function put(url, data) {
  return instace.put(url, data);
}
export function del(url) {
  return instace.del(url);
}
