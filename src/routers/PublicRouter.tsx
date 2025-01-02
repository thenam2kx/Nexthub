import Layout from '@/Layout'
import Friend from '@/pages/Friend'
import Group from '@/pages/Group'
import Home from '@/pages/Home'
import Video from '@/pages/Video'
import { BrowserRouter, Route, Routes } from 'react-router'


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
      </Routes>
    </BrowserRouter>
  )
}

export default PublicRouter