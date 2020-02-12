import { ApiGeneral } from "./api";

export default {
  postRecruitment(data) {
    return ApiGeneral.post(`/recruitment`, data);
  },
  getDetailNim(nim) {
    return ApiGeneral.get(`/recruitment/checkstatus/${nim}`);
  }
};
