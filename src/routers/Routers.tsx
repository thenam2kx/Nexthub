import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/Layout'
import Signin from '@/pages/auth/signin/signin'
import Friend from '@/pages/Friend'
import Group from '@/pages/Group'
import Home from '@/pages/Home/Home'
import Video from '@/pages/Video'
import Signup from '@/pages/auth/signup/signup'
import VerifyPage from '@/pages/auth/verify/verify'
import ForgotPasswordPage from '@/pages/auth/forgotPassword/forgot.password'
import VerifyForgotPassword from '@/pages/auth/forgotPassword/verify.forgot.password'
import ChangePassword from '@/pages/auth/forgotPassword/change.password'
import PrivateRouter from './PrivateRouter'


const Routers = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='friends' element={<Friend />}/>
            <Route path='videos' element={<Video />}/>
            <Route path='groups' element={<Group />}/>
          </Route>
        </Route>

        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/verify' element={<VerifyPage />}/>
        <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
        <Route path='/verify-code-password' element={<VerifyForgotPassword />}/>
        <Route path='/change-password' element={<ChangePassword />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers