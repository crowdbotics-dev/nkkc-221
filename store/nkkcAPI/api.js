import axios from "axios"
const nkkcAPI = axios.create({
  baseURL: "https://nkkc-221.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return nkkcAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return nkkcAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return nkkcAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_xyz_list(payload) {
  return nkkcAPI.get(`/api/v1/xyz/`)
}
function api_v1_xyz_create(payload) {
  return nkkcAPI.post(`/api/v1/xyz/`, payload)
}
function api_v1_xyz_retrieve(payload) {
  return nkkcAPI.get(`/api/v1/xyz/${payload.id}/`)
}
function api_v1_xyz_update(payload) {
  return nkkcAPI.put(`/api/v1/xyz/${payload.id}/`, payload)
}
function api_v1_xyz_partial_update(payload) {
  return nkkcAPI.patch(`/api/v1/xyz/${payload.id}/`, payload)
}
function api_v1_xyz_destroy(payload) {
  return nkkcAPI.delete(`/api/v1/xyz/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return nkkcAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return nkkcAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return nkkcAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return nkkcAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return nkkcAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return nkkcAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return nkkcAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return nkkcAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return nkkcAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return nkkcAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return nkkcAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_xyz_list,
  api_v1_xyz_create,
  api_v1_xyz_retrieve,
  api_v1_xyz_update,
  api_v1_xyz_partial_update,
  api_v1_xyz_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
