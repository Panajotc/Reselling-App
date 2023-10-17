import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://10.40.5.203:9000/api",
});

export default apiClient;
