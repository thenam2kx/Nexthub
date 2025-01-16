export {}

declare global {

  interface IBackendResponse<T> {
    error?: string | string[]
    message: string | string[]
    statusCode: number | string
    data?: T
  }

  interface ISignin {
    username: string
    password: string
  }

  interface ISigninResponse {
    user: {
      _id: string
      email: string
      fullname: string
      role: string
    }
    access_token: string
  }

  interface ISignup {
    email: string
    fullname: string
    password: string
  }

  interface IUserAuth {
    email: string,
    fullname: string
    role: string
    _id: string
  }
}