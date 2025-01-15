import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '@/Layout'
import Signin from '@/pages/auth/signin/signin'
import Friend from '@/pages/Friend'
import Group from '@/pages/Group'
import Home from '@/pages/Home/Home'
import Video from '@/pages/Video'
import Signup from '@/pages/auth/signup/signup'
import VerifyPage from '@/pages/auth/verify/verify'


const PublicRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='friends' element={<Friend />} />
          <Route path='videos' element={<Video />} />
          <Route path='groups' element={<Group />} />
        </Route>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/verify' element={<VerifyPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter