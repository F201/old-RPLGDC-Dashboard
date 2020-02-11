import { ApiGeneral } from './api'

export default {
  postRecruitment(data) {
    return ApiGeneral.post(`/recruitment`, data);
  }
}