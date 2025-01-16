import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
  isAuthenticated: boolean
  accessToken: string | null
  user: IUserAuth | null
}


interface ISigninAuth {
  user: IUserAuth
  accessToken: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  user: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signin: (state, action: PayloadAction<ISigninAuth>) => {
      const { user, accessToken } = action.payload
      state.user = user
      state.isAuthenticated = true
      state.accessToken = accessToken
    },
    signout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.accessToken = null
    }
  }
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer
