import axios from "axios";

import { BASE_URL, TIMEOUT } from "./config";

class HYRequest {
  constructor(baseURL, timeout) {
    this.insance = axios.create({
      baseURL,
      timeout,
    });

    this.insance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.insance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }
}

export default new HYRequest(BASE_URL, TIMEOUT);
