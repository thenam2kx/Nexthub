import axios from './axios.customize'

export interface ISignin {
  username: string
  password: string
}


export const signin = async (data: ISignin) => {
  const url = '/api/v1/auth/signin'
  return axios.post<IBackendResponse<ISigninResponse>>(url, {
    username: data.username,
    password: data.password
  })
}

export const signupAPI = async (data: ISignup) => {
  const url = '/api/v1/auth/signup'
  return axios.post<IBackendResponse<ISigninResponse>>(url, data)
}

export const verifyAPI = async (dataReq: { code: string, email: string }) => {
  const url = '/api/v1/auth/verify-email'
  return axios.post<IBackendResponse<ISigninResponse>>(url, dataReq)
}

export const reSendEmailAPI = async (email: string) => {
  const url = '/api/v1/auth/resend-email'
  return axios.post<IBackendResponse<ISigninResponse>>(url, { email })
}

export const forgotPasswordAPI = async (email: string) => {
  const url = '/api/v1/auth/forgot-password'
  return axios.post<IBackendResponse<ISigninResponse>>(url, { email })
}

export const verifyCodePasswordAPI = async (dataReq: { code: string, email: string }) => {
  const url = '/api/v1/auth/verify-code-password'
  return axios.post<IBackendResponse<ISigninResponse>>(url, dataReq)
}

export const changePasswordAPI = async (dataReq: { password: string, email: string }) => {
  const url = '/api/v1/auth/change-password'
  return axios.post<IBackendResponse<ISigninResponse>>(url, dataReq)
}

export const getAccount = async () => {
  const url = '/api/v1/auth/account'
  return axios.get(url)
}

