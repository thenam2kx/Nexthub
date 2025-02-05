import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/Layout'
import Signin from '@/pages/auth/signin/signin'
import FriendsPage from '@/pages/friend/friend.page'
import Group from '@/pages/Group'
import HomePage from '@/pages/home/home'
import Video from '@/pages/Video'
import Signup from '@/pages/auth/signup/signup'
import VerifyPage from '@/pages/auth/verify/verify'
import ForgotPasswordPage from '@/pages/auth/forgotPassword/forgot.password'
import VerifyForgotPassword from '@/pages/auth/forgotPassword/verify.forgot.password'
import ChangePassword from '@/pages/auth/forgotPassword/change.password'
import PrivateRouter from './PrivateRouter'
import ProfilePage from '@/pages/profile/profile.page'
import { useAppSelector } from '@/redux/hooks'
import BreakRouter from './BreakRouter'
import AboutProfile from '@/pages/profile/about.profile/about.profile'
import LayoutProfile from '@/pages/profile/layout.profile'
import FriendsProfile from '@/pages/profile/friends.profile/friends.profile'


const Routers = () => {
  const isAuth = useAppSelector(state => state.auth.isAuthenticated)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='friends' element={<FriendsPage />}/>
            <Route path='videos' element={<Video />}/>
            <Route path='groups' element={<Group />}/>
            <Route path='profile' element={<LayoutProfile />}>
              <Route index element={<ProfilePage />} />
              <Route path='about' element={<AboutProfile />} />
              <Route path='friends' element={<FriendsProfile />} />
            </Route>
          </Route>
        </Route>

        <Route element={<BreakRouter isAllowed={!isAuth} redirectTo='/' />}>
          <Route path='/signin' element={<Signin />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/verify' element={<VerifyPage />}/>
          <Route path='/forgot-password' element={<ForgotPasswordPage />}/>
          <Route path='/verify-code-password' element={<VerifyForgotPassword />}/>
          <Route path='/change-password' element={<ChangePassword />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers