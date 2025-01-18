import store from '@/redux/store'
import { setAccessToken, setRefreshToken } from '@/redux/auth/auth.slice'

export const dispatchSetAccessToken = (accessToken: string) => {
  store.dispatch(setAccessToken({ accessToken }))
}

export const dispatchSetRefreshToken = (status: boolean, message: string) => {
  store.dispatch(setRefreshToken({ status, message }))
}

export const dispatchGetRefreshToken = () => {
  return store.getState().auth.accessToken
}
