import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AuthState {
  isAuthenticated: boolean
  isLoading: boolean
  isRefreshToken: boolean
  errorRefreshToken: string | null
  accessToken: string | null
  user: IUserAuth | null
}


interface ISigninAuth {
  user: IUserAuth
  accessToken: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  isRefreshToken: false,
  errorRefreshToken: null,
  accessToken: null,
  user: null
}

// export const fetchAccount = createAsyncThunk(
//   'account/fetchAccount',
//   async () => {
//     const response = await getAccountAPI()
//     return response.data
//   }
// )

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
    },

    setAccessToken : (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload?.accessToken ?? ''
    },

    setRefreshToken: (state, action: PayloadAction<{ status: boolean, message: string }>) => {
      state.isRefreshToken = action.payload?.status ?? false
      state.errorRefreshToken = action.payload?.message ?? ''
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAccount.pending, (state, action) => {
  //     if (action.payload) {
  //       state.isAuthenticated = false
  //       state.isLoading = true
  //     }
  //   })

  //   builder.addCase(fetchAccount.fulfilled, (state, action) => {
  //     if (action.payload) {
  //       state.isAuthenticated = true
  //       state.isLoading = false
  //       if (state.user) {
  //         state.user._id = action?.payload?.user?._id
  //         state.user.email = action.payload.user?.email
  //         state.user.fullname = action.payload.user?.fullname
  //         state.user.role = action?.payload?.user?.role
  //       }
  //     }
  //   })

  //   builder.addCase(fetchAccount.rejected, (state, action) => {
  //     if (action.payload) {
  //       state.isAuthenticated = false
  //       state.isLoading = false
  //     }
  //   })
  // }
})

export const { signin, signout, setRefreshToken, setAccessToken } = authSlice.actions

export default authSlice.reducer
