import { ApiGeneral } from "./api";

export default {
  postRecruitment(data) {
    return ApiGeneral.post(`/recruitment`, data);
  },
  getDetailNim(nim) {
    return ApiGeneral.get(`/recruitment/checkstatus/${nim}`);
  },
  getTahap1(nim) {
    return ApiGeneral.get(`/recruitment/status1/${nim}`);
  }
};
